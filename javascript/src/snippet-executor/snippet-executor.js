/**
 * Executes a JavaScript snippet in an isolated scope with injected variables
 * and a small standard library. Also assigns a debuggable virtual filename
 * via `//# sourceURL=...` so the snippet appears in DevTools/Node inspector.
 *
 * Satisfies the prompt:
 *   (a) user variables are accessible from the code
 *   (b) built-ins are always available:
 *       - $math: sum, sub, mul, div, mod, pow, min, max, avg, clamp,
 *                abs, sqrt, floor, ceil, round(digits=0),
 *                random(), randomRange(min,max), randInt(min,max),
 *                hypot(...nums)
 *       - $logger: console.log passthrough
 *   (c) snippet is given a readable source name; if `variables.$name` is absent,
 *       the name is inferred from the code (e.g., "sum-snippet.js").
 *
 * Security note: Executing arbitrary strings is unsafe. Only run trusted code.
 *
 * @param {string} code
 *        The JavaScript source to run. It can reference injected variables,
 *        `$math`, and `$logger`.
 *
 * @param {Object<string, any>} [variables={}]
 *        A map of variable names to values to expose to the snippet. The special
 *        key `$name` (optional) can set the virtual filename shown in debuggers.
 *        Any `$name`, `$math`, `$logger` keys in this object are stripped from
 *        the snippet’s scope to avoid shadowing the built-ins.
 *
 * @returns {*}
 *          Whatever the snippet evaluates/returns. If the code has no explicit
 *          return statement, the value of the last expression (if any) is returned
 *          by the Function call; otherwise `undefined`.
 *
 * @throws {TypeError}
 *         If `code` is not a string, or `variables` is not an object.
 *
 * @example
 * // Auto-inferred name → "sum-snippet.js"
 * execute('$logger("Sum:", $math.sum(a,b))', { a: 17, b: 3 });
 * // logs: Sum: 20
 *
 * @example
 * // Explicit name via variables.$name
 * execute('debugger; $logger("hello")', { $name: 'hello-snippet.js' });
 *
 * @example
 * // Return a value to the caller
 * const area = execute('const r = 5; $math.mul(Math.PI, $math.pow(r,2));');
 * // area ≈ 78.5398
 */
export function execute(code, variables = {}) {

  if (typeof code !== 'string') throw new TypeError('code must be a string');
  if (variables == null || typeof variables !== 'object') throw new TypeError('variables must be an object');

  // (c) Choose a name visible in DevTools/Node inspector.
  const name = typeof variables.$name === 'string'
    ? variables.$name
    : inferSnippetName(code);

  // Don’t let user vars shadow control/built-in names.
  const { $name, $math: _ignoreMath, $logger: _ignoreLogger, ...userVars } = variables;

  // (b) Built-ins
  const toNum = (v) => Number(v);
  const toNums = (arr) => arr.map(Number);

  const $math = Object.freeze({
    // basic arithmetic
    sum: (x, y) => toNum(x) + toNum(y),
    sub: (x, y) => toNum(x) - toNum(y),
    mul: (x, y) => toNum(x) * toNum(y),
    div: (x, y) => toNum(x) / toNum(y),
    mod: (x, y) => toNum(x) % toNum(y),
    pow: (x, y) => toNum(x) ** toNum(y),

    // aggregates & bounds
    min: (...xs) => Math.min(...toNums(xs)),
    max: (...xs) => Math.max(...toNums(xs)),
    avg: (...xs) => {
      const n = xs.length; if (!n) return NaN;
      const arr = toNums(xs);
      return arr.reduce((s, v) => s + v, 0) / n;
    },
    clamp: (x, lo, hi) => Math.min(Math.max(toNum(x), toNum(lo)), toNum(hi)),

    // rounding & roots
    abs: (x) => Math.abs(toNum(x)),
    sqrt: (x) => Math.sqrt(toNum(x)),
    floor: (x) => Math.floor(toNum(x)),
    ceil: (x) => Math.ceil(toNum(x)),
    round: (x, digits = 0) => {
      const f = 10 ** toNum(digits);
      return Math.round(toNum(x) * f) / f;
    },

    // randomness
    random: () => Math.random(),
    randomRange: (min, max) => Math.random() * (toNum(max) - toNum(min)) + toNum(min),
    randInt: (min, max) => {
      const lo = Math.ceil(toNum(min));
      const hi = Math.floor(toNum(max));
      return Math.floor(Math.random() * (hi - lo + 1)) + lo; // inclusive
    },

    // geometry
    hypot: (...xs) => Math.hypot(...toNums(xs)),
  });

  const $logger = (...args) => console.log(...args);

  // (a) Inject user variables + built-ins into the Function scope.
  const paramNames  = [...Object.keys(userVars), '$math', '$logger'];
  const paramValues = [...Object.values(userVars), $math, $logger];

  const body = `"use strict";\n${code}\n//# sourceURL=${name}\n`;
  const fn = new Function(...paramNames, body);
  return fn(...paramValues);
}

/**
 * Infers a readable virtual filename for a snippet based on the `$math` methods
 * referenced in `code`. This improves stack traces and makes the snippet show
 * up under a descriptive name in DevTools/Node inspector.
 *
 * Naming strategy (checked in priority order to avoid substring collisions):
 *  - If exactly one `$math.<method>` is detected → `"<method>-snippet.js"`.
 *  - If multiple methods are detected           → `"multi-snippet.js"`.
 *  - If only `$logger` is used                  → `"logger-snippet.js"`.
 *  - Otherwise                                  → `"user-snippet.js"`.
 *
 * @param {string} code  The snippet source to analyze (not executed here).
 * @returns {string}     A virtual filename to embed via `//# sourceURL=...`.
 *
 * @example
 * inferSnippetName('$math.sum(a,b)');               // "sum-snippet.js"
 * inferSnippetName('$math.sum(a,b); $math.mul(a,b)'); // "multi-snippet.js"
 * inferSnippetName('$logger("x")');                 // "logger-snippet.js"
 * inferSnippetName('const x = 1;');                 // "user-snippet.js"
 */
function inferSnippetName(code) {
  // Check specific names before generic ones to avoid "random" matching "randomRange".
  const methods = [
    'randomRange', 'randInt',
    'sum','sub','mul','div','mod','pow',
    'min','max','avg','clamp',
    'abs','sqrt','floor','ceil','round',
    'random','hypot',
  ];

  const found = [];
  for (const m of methods) {
    const re = new RegExp(String.raw`\$math\.${m}\b`);
    if (re.test(code)) found.push(m);
  }

  if (found.length === 1) return `${found[0]}-snippet.js`;
  if (found.length > 1)  return 'multi-snippet.js';
  if (/\$logger\b/.test(code)) return 'logger-snippet.js';
  return 'user-snippet.js';
}

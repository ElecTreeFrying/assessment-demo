import { execute } from '../snippet-executor.js';

export function run() {

  /* ======================= EXAM SAMPLE ======================= */
  console.log('\n\n=== Assessment Exam / Javascript #3 Example ===');

  console.log(`\n${`execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 }); // Sum: 20`}`);
  execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 }); // Sum: 20

  console.log(`\n${`  execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 }); // Mul: 51`}`);
  execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 }); // Mul: 51

  /* ======================= SUMMATION ======================= */
  console.log('\n\n=== SUMMATION ===');

  // Adds two numbers; basic usage (2 + 3 = 5).
  console.log('\n* Adds two numbers; basic usage (2 + 3 = 5).');
  execute('$logger("sum:", $math.sum(a, b))', { a: 2, b: 3 });

  // Handles negative and positive operands (-4 + 10 = 6).
  console.log('\n* Handles negative and positive operands (-4 + 10 = 6).');
  execute('$logger("sum:", $math.sum(-4, 10))');

  // Demonstrates function composition: sum(sum(1, 2), 3) = 6.
  console.log('\n* Demonstrates function composition: sum(sum(1, 2), 3) = 6.');
  execute('$logger("sum chain:", $math.sum($math.sum(1, 2), 3))');

  /* ======================= SUBTRACTION ======================= */
  console.log('\n\n=== SUBTRACTION ===');

  // Basic subtraction: 10 - 7 = 3
  console.log('\n* Basic subtraction: 10 - 7 = 3');
  execute('$logger("sub:", $math.sub(a, b))', { a: 10, b: 7 });

  // Subtracting from zero: 0 - 5 = -5
  console.log('\n* Subtracting from zero: 0 - 5 = -5');
  execute('$logger("sub:", $math.sub(0, 5))');

  // Subtracting a negative is addition: -3 - (-8) = 5
  console.log('\n* Subtracting a negative is addition: -3 - (-8) = 5');
  execute('$logger("sub negative:", $math.sub(-3, -8))');

  /* ======================= MULTIPLICATION ======================= */
  console.log('\n\n=== MULTIPLICATION ===');

  // Basic product: 6 × 7 = 42
  console.log('\n* Basic product: 6 × 7 = 42');
  execute('$logger("mul:", $math.mul(a, b))', { a: 6, b: 7 });

  // Negative × positive results negative: -4 × 2 = -8
  console.log('\n* Negative × positive results negative: -4 × 2 = -8');
  execute('$logger("mul:", $math.mul(-4, 2))');

  // Chained multiplication (associative grouping): (2 × 3) × 4 = 24
  console.log('\n* Chained multiplication (associative grouping): (2 × 3) × 4 = 24');
  execute('$logger("mul chain:", $math.mul($math.mul(2,3), 4))');

  /* ======================= DIVISION ======================= */
  console.log('\n\n=== DIVISION ===');

  // Integer division: 20 ÷ 5 = 4
  console.log('\n* Integer division: 20 ÷ 5 = 4');
  execute('$logger("div:", $math.div(a, b))', { a: 20, b: 5 });

  // Non-integer result: 7 ÷ 2 = 3.5
  console.log('\n* Non-integer result: 7 ÷ 2 = 3.5');
  execute('$logger("div:", $math.div(7, 2))');

  // Negative ÷ positive results negative: -9 ÷ 3 = -3
  console.log('\n* Negative ÷ positive results negative: -9 ÷ 3 = -3');
  execute('$logger("div negative:", $math.div(-9, 3))');

  /* ======================= MODULO ======================= */
  console.log('\n\n=== MODULO ===');

  // Remainder of 17 ÷ 5 is 2
  console.log('\n* Remainder of 17 ÷ 5 is 2');
  execute('$logger("mod:", $math.mod(a, b))', { a: 17, b: 5 });

  // Remainder with negative dividend (implementation-defined sign)
  console.log('\n* Remainder with negative dividend (implementation-defined sign)');
  execute('$logger("mod negative:", $math.mod(-17, 5))');

  // Even check via modulo: n % 2 === 0 → true when even
  console.log('\n* Even check via modulo: n % 2 === 0 → true when even');
  execute('$logger("even?", $math.mod(n, 2) === 0)', { n: 42 });

  /* ======================= POWER ======================= */
  console.log('\n\n=== POWER ===');

  // Exponentiation: 2 ** 10 = 1024
  console.log('\n* Exponentiation: 2 ** 10 = 1024');
  execute('$logger("pow:", $math.pow(a, b))', { a: 2, b: 10 });

  // Fractional exponent (square root): 9 ** 0.5 = 3
  console.log('\n* Fractional exponent (square root): 9 ** 0.5 = 3');
  execute('$logger("pow fraction:", $math.pow(9, 0.5))');

  // Negative base with odd exponent: (-2) ** 3 = -8
  console.log('\n* Negative base with odd exponent: (-2) ** 3 = -8');
  execute('$logger("pow negative base:", $math.pow(-2, 3))');

  /* ======================= MINIMUM ======================= */
  console.log('\n\n=== MINIMUM ===');

  // Minimum of a variadic list
  console.log('\n* Minimum of a variadic list');
  execute('$logger("min:", $math.min(5, 2, 9, -1))');

  // Minimum from spread array
  console.log('\n* Minimum from spread array');
  execute('$logger("min arr:", $math.min(...nums))', { nums: [7, 3, 8, 6] });

  // Minimum of two values (negative numbers)
  console.log('\n* Minimum of two values (negative numbers)');
  execute('$logger("min pair:", $math.min(a, b))', { a: -10, b: -2 });

  /* ======================= MAXIMUM ======================= */
  console.log('\n\n=== MAXIMUM ===');

  // Maximum of a variadic list
  console.log('\n* Maximum of a variadic list');
  execute('$logger("max:", $math.max(5, 2, 9, -1))');

  // Maximum from spread array
  console.log('\n* Maximum from spread array');
  execute('$logger("max arr:", $math.max(...nums))', { nums: [7, 3, 8, 6] });

  // Maximum of two values (negative numbers)
  console.log('\n* Maximum of two values (negative numbers)');
  execute('$logger("max pair:", $math.max(a, b))', { a: -10, b: -2 });

  /* ======================= AVERAGE ======================= */
  console.log('\n\n=== AVERAGE ===');

  // Average of several arguments
  console.log('\n* Average of several arguments');
  execute('$logger("avg:", $math.avg(10, 20, 30))');

  // Average from an array via spread
  console.log('\n* Average from an array via spread');
  execute('$logger("avg arr:", $math.avg(...scores))', { scores: [80, 90, 75, 95] });

  // Average of two numbers
  console.log('\n* Average of two numbers');
  execute('$logger("avg pair:", $math.avg(a, b))', { a: 1, b: 2 });

  /* ======================= CLAMP ======================= */
  console.log('\n\n=== CLAMP ===');

  // Clamps above the upper bound to 100
  console.log('\n* Clamps above the upper bound to 100');
  execute('$logger("clamp:", $math.clamp(val, 0, 100))', { val: 135 });

  // Clamps below the lower bound to -5
  console.log('\n* Clamps below the lower bound to -5');
  execute('$logger("clamp:", $math.clamp(val, -5, 5))', { val: -8 });

  // Clamps the result of a computation into a range
  console.log('\n* Clamps the result of a computation into a range');
  execute('$logger("clamp:", $math.clamp($math.sum(a,b), 0, 10))', { a: 4, b: 9 });

  /* ======================= ABSOLUTE ======================= */
  console.log('\n\n=== ABSOLUTE ===');

  // Absolute value of a negative number → 42
  console.log('\n* Absolute value of a negative number → 42');
  execute('$logger("abs:", $math.abs(x))', { x: -42 });

  // Absolute value of zero is zero
  console.log('\n* Absolute value of zero is zero');
  execute('$logger("abs:", $math.abs(0))');

  // Absolute value of a positive float stays the same
  console.log('\n* Absolute value of a positive float stays the same');
  execute('$logger("abs:", $math.abs(3.14))');

  /* ======================= SQUARE ======================= */
  console.log('\n\n=== SQUARE ROOT ===');

  // Square root of a perfect square
  console.log('\n* Square root of a perfect square');
  execute('$logger("sqrt:", $math.sqrt(n))', { n: 81 });

  // Square root of a non-perfect square
  console.log('\n* Square root of a non-perfect square');
  execute('$logger("sqrt:", $math.sqrt(2))');

  // Combine functions: sqrt(abs(-49)) = 7
  console.log('\n* Combine functions: sqrt(abs(-49)) = 7');
  execute('$logger("sqrt abs:", $math.sqrt($math.abs(-49)))');

  /* ======================= FLOOR ======================= */
  console.log('\n\n=== FLOOR ===');

  // Rounds down toward -∞: floor(7.9) = 7
  console.log('\n* Rounds down toward -∞: floor(7.9) = 7');
  execute('$logger("floor:", $math.floor(x))', { x: 7.9 });

  // Negative values round down (more negative): floor(-3.2) = -4
  console.log('\n* Negative values round down (more negative): floor(-3.2) = -4');
  execute('$logger("floor:", $math.floor(-3.2))');

  // Floor applied to a division result: floor(7/2) = floor(3.5) = 3
  console.log('\n* Floor applied to a division result: floor(7/2) = floor(3.5) = 3');
  execute('$logger("floor div:", $math.floor($math.div(7, 2)))');

  /* ======================= CEIL ======================= */
  console.log('\n\n=== CEIL ===');

  // Rounds up toward +∞: ceil(7.1) = 8
  console.log('\n* Rounds up toward +∞: ceil(7.1) = 8');
  execute('$logger("ceil:", $math.ceil(x))', { x: 7.1 });

  // Negative values round up (less negative): ceil(-3.2) = -3
  console.log('\n* Negative values round up (less negative): ceil(-3.2) = -3');
  execute('$logger("ceil:", $math.ceil(-3.2))');

  // Ceil applied to a division result: ceil(7/2) = ceil(3.5) = 4
  console.log('\n* Ceil applied to a division result: ceil(7/2) = ceil(3.5) = 4');
  execute('$logger("ceil div:", $math.ceil($math.div(7, 2)))');

  /* ======================= ROUND(digits) ======================= */
  console.log('\n\n=== ROUND (DIGITS) ===');

  // Round to nearest integer: 3.14159 → 3
  console.log('\n* Round to nearest integer: 3.14159 → 3');
  execute('$logger("round0:", $math.round(pi))', { pi: 3.14159 });

  // Round to two decimal places: 3.14159 → 3.14
  console.log('\n* Round to two decimal places: 3.14159 → 3.14');
  execute('$logger("round2:", $math.round(pi, 2))', { pi: 3.14159 });

  // Negative digits rounds at tens place: 123.45 → 120
  console.log('\n* Negative digits rounds at tens place: 123.45 → 120');
  execute('$logger("round neg digits:", $math.round(val, -1))', { val: 123.45 }); // to nearest 10

  /* ======================= RANDOM ======================= */
  console.log('\n\n=== RANDOM ===');

  // Pseudorandom float in [0,1)
  console.log('\n* Pseudorandom float in [0,1)');
  execute('$logger("random:", $math.random())');

  // Scale a random float to [0,100)
  console.log('\n* Scale a random float to [0,100)');
  execute('$logger("random scaled:", $math.mul($math.random(), 100))');

  // Simple coin flip using thresholding
  console.log('\n* Simple coin flip using thresholding');
  execute('$logger("coin flip:", $math.random() < 0.5 ? "H" : "T")');

  /* ======================= RANDOM(min,max) ======================= */
  console.log('\n\n=== RANDOM RANGE ===');

  // Uniform random in half-open interval [0,1)
  console.log('\n* Uniform random in half-open interval [0,1)');
  execute('$logger("rand [0,1):", $math.randomRange(0, 1))');

  // Uniform random in [5,10)
  console.log('\n* Uniform random in [5,10)');
  execute('$logger("rand [5,10):", $math.randomRange(5, 10))');

  // Random score in [0,100) rounded to 1 decimal
  console.log('\n* Random score in [0,100) rounded to 1 decimal');
  execute('$logger("rand float score:", $math.round($math.randomRange(0, 100), 1))');

  /* ======================= RANDOM(min,max) ======================= */
  console.log('\n\n=== RANDOM INT ===');

  // Random integer in [1,6]
  console.log('\n* Random integer in [1,6]');
  execute('$logger("d6:", $math.randInt(1, 6))');

  // Random integer in [1,20]
  console.log('\n* Random integer in [1,20]');
  execute('$logger("d20:", $math.randInt(1, 20))');

  // Random year between 1990 and 2025 inclusive
  console.log('\n* Random year between 1990 and 2025 inclusive');
  execute('$logger("year:", $math.randInt(1990, 2025))');

  /* ======================= HYPOTENUSE(...nums) ======================= */
  console.log('\n\n=== HYPOTENUSE ===');

  // Classic 3–4–5 triangle: hypot(3,4) = 5
  console.log('\n* Classic 3–4–5 triangle: hypot(3,4) = 5');
  execute('$logger("hypot(3,4):", $math.hypot(3, 4))');

  // Hypotenuse from array spread
  console.log('\n* Hypotenuse from array spread');
  execute('$logger("hypot arr:", $math.hypot(...vec))', { vec: [2, 3, 6] });

  // 2D distance between (x1,y1) and (x2,y2)
  console.log('\n* 2D distance between (x1,y1) and (x2,y2)');
  execute('$logger("distance:", $math.hypot(x2-x1, y2-y1))', { x1: 2, y1: 1, x2: 5, y2: 5 });

}



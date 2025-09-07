/**
 * Headers / FormData / Request / Response equality
 * - Compares meaningful fields and entries.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Headers / FormData / Request / Response ===");
  if (typeof Headers !== "undefined") {
    const h1 = new Headers({a:"1",B:"2"});
    const h2 = new Headers({b:"2",A:"1"});
    check("Headers \"(Equal)\"", h1, h2, true);
  } else console.log("(Headers not available)");

  if (typeof FormData !== "undefined") {
    const f1 = new FormData(); f1.append("a","1"); f1.append("b","2");
    const f2 = new FormData(); f2.append("b","2"); f2.append("a","1");
    check("FormData \"(Equal)\"", f1, f2, true);
  } else console.log("(FormData not available)");

  if (typeof Request !== "undefined") {
    check("Request \"(Equal)\"",
      new Request("https://x.io/api", { method: "POST" }),
      new Request("https://x.io/api", { method: "POST" }),
      true
    );
    check("Request \"(Not Equal)\" (method)",
      new Request("https://x.io/api", { method: "GET" }),
      new Request("https://x.io/api", { method: "POST" }),
      false
    );
  } else console.log("(Request not available)");

  if (typeof Response !== "undefined") {
    check("Response \"(Equal)\"",
      new Response(null, { status: 200, statusText: "OK" }),
      new Response(null, { status: 200, statusText: "OK" }),
      true
    );
    check("Response \"(Not Equal)\" (status)",
      new Response(null, { status: 200 }),
      new Response(null, { status: 404 }),
      false
    );
  } else console.log("(Response not available)");
}



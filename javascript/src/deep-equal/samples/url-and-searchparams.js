/**
 * URL & URLSearchParams equality
 * - URL equal if hrefs match; params equal if serialized forms match.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== URL & URLSearchParams ===");
  if (typeof URL !== "undefined") {
    check("URL \"(Equal)\"", new URL("https://x.io?a=1"), new URL("https://x.io?a=1"), true);
    check("URL \"(Not Equal)\"", new URL("https://x.io?a=1"), new URL("https://x.io?a=2"), false);
  } else {
    console.log("(URL not available)");
  }
  if (typeof URLSearchParams !== "undefined") {
    check("URLSearchParams \"(Equal)\"", new URLSearchParams("a=1&b=2"), new URLSearchParams("b=2&a=1"), true);
    check("URLSearchParams \"(Not Equal)\"", new URLSearchParams("a=1"), new URLSearchParams("a=2"), false);
  } else {
    console.log("(URLSearchParams not available)");
  }
}



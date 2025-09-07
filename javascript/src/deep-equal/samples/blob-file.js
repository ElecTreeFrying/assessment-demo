/**
 * Blob / File equality
 * - Blobs: size and type; Files: name and lastModified also considered.
 */
import { check } from '../deep-equal.js';

export function run() {
  console.log("\n=== Blob / File ===");
  if (typeof Blob !== "undefined") {
    check("Blob \"(Equal)\"", new Blob(["hi"], { type: "text/plain" }),
                     new Blob(["hi"], { type: "text/plain" }), true);
    check("Blob \"(Not Equal)\" (size/type)", new Blob(["hi"], { type: "text/plain" }),
                                  new Blob(["hello"], { type: "text/plain" }), false);
  } else {
    console.log("(Blob not available)");
  }
  if (typeof File !== "undefined") {
    check("File \"(Equal)\"",
      new File(["a"], "x.txt", { type: "text/plain", lastModified: 1 }),
      new File(["a"], "x.txt", { type: "text/plain", lastModified: 1 }),
      true
    );
    check("File \"(Not Equal)\" (name)",
      new File(["a"], "x.txt", { type: "text/plain", lastModified: 1 }),
      new File(["a"], "y.txt", { type: "text/plain", lastModified: 1 }),
      false
    );
  } else {
    console.log("(File not available)");
  }
}



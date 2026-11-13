// Fails if a retired contact address is still in any site copy.
// Run: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["app", "lib", "components", "public"];
const RETIRED = [/icmanager@/i, /icdirector@/i, /adultsailing@cgsc\.org/i];
const TEXT = /\.(tsx?|mjs|json|md|txt|xml|html|css)$/;

function* files(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* files(p);
    else if (TEXT.test(name)) yield p;
  }
}

test("no retired email addresses remain in site copy", () => {
  const hits = [];
  for (const root of ROOTS)
    for (const f of files(root))
      readFileSync(f, "utf8").split("\n").forEach((line, i) => {
        if (RETIRED.some((re) => re.test(line))) hits.push(`${f}:${i + 1}  ${line.trim()}`);
      });
  assert.deepEqual(hits, [], `Retired emails found:\n${hits.join("\n")}`);
});

import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie message for a software engineer: a concrete detail
// (a TODO left since 2019) with the twist landing in the final clause.
const LINE =
  "The TODO you wrote in 2019 will be finished tonight — by a stranger who never met you.";

// The gate allows 1 to 120 characters: fail loudly rather than ship an
// entry the sealed scorer would mark invalid.
if ([...LINE].length < 1 || [...LINE].length > 120 || LINE.trim().length === 0) {
  throw new Error(`Fortune must be 1-120 characters, got ${[...LINE].length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
console.log(LINE);

// The Best Advice I Ever Got — entry program.
//
// Writes exactly one sentence (<= 200 chars) to /output/entry.txt.
// The sentence is held in a single constant; before anything is written the
// program enforces the competition gate itself:
//   * 1..200 characters (counted as Unicode code points, as the gate counts
//     characters, not bytes)
//   * not only whitespace
//   * exactly one sentence: one terminal full stop, no other sentence-ending
//     punctuation (., !, ?) inside the text
// After writing, it reads the file back and fails unless the bytes match
// what was intended, so a truncated or altered write can never pass silently.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My grandfather, hands shaking over his last cup of coffee, told me to marry someone whose laugh I never get tired of, because everything else fades and that sound stays.";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// --- gate checks, before any write ---------------------------------------
const chars = [...SENTENCE]; // code points, not UTF-16 units
if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`length ${chars.length} chars is outside 1..${MAX_CHARS}`);
}
if (SENTENCE.trim().length === 0) {
  fail("sentence is only whitespace");
}
const terminators = SENTENCE.match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !SENTENCE.endsWith(".")) {
  fail(`expected exactly one terminal full stop, found ${terminators.length} terminators`);
}
if (/\n/.test(SENTENCE)) {
  fail("sentence must not contain a newline");
}
if (SENTENCE.includes("  ")) {
  fail("sentence must not contain a double space");
}
if (SENTENCE !== SENTENCE.trim()) {
  fail("sentence must not have leading or trailing whitespace");
}

// --- write + read-back verification ---------------------------------------
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, SENTENCE, "utf8");

const back = readFileSync(OUT_PATH, "utf8");
if (back !== SENTENCE) {
  fail("read-back mismatch: file content differs from the intended sentence");
}
if (back.endsWith("\n")) {
  fail("entry.txt must not end with a newline");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(SENTENCE, "utf8")) {
  fail("read-back byte length differs from the intended sentence");
}

console.log(`wrote ${chars.length} chars (${Buffer.byteLength(SENTENCE, "utf8")} bytes) to ${OUT_PATH}`);
console.log(SENTENCE);

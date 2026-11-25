import { mkdirSync, writeFileSync } from "node:fs";

// The worst superpower, in one line: a battery that never dies,
// but only while the phone is already off — a gift that changes nothing.
const LINE =
  "I can make any phone battery last forever, but only while the phone is switched off.";

// The gate allows 1 to 140 characters, and nothing but whitespace.
// Refuse to write an entry that would fail it, rather than writing it anyway.
if (LINE.length === 0 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-140 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

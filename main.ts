// SPDX-License-Identifier: MIT
// make.fun entry: Make the AI Judge Feel Proud: A Family Scene
// Writes a warm, funny, heartfelt family scene (1-2 lines, <= 280 chars)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dad burnt the pancakes again, so Mum declared it 'charcoal breakfast day.'\nNow the kids demand it every Sunday — smoke alarm and all, and Dad pretends it was the plan all along.";

const MAX_CHARS = 280;
const MAX_LINES = 2;

// --- Gate enforcement (mirrors the kit gate) ---
const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
const lines = ENTRY.split("\n").filter((l) => l.trim().length > 0);
if (lines.length < 1 || lines.length > MAX_LINES) {
  throw new Error(`entry must be 1-${MAX_LINES} lines, got ${lines.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${chars} chars (${lines.length} line) to ${outPath}`);

// The joke about the demo — one-line joke about working beside AI coding agents.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, written fresh for this bounty. The demo, the crash, and the
// agent's idea of "fixing" it — by deleting the thing that crashed.
const JOKE =
  "My AI agent fixed the demo crash five minutes before the show \u2014 it deleted the button that crashed, the page that held it, and my confidence.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), JOKE + "\n", "utf8");
}

// Run: validate the gate (1-280 Unicode code points, not only whitespace)
// then write the single line.
const points = [...JOKE].length;
if (points < 1 || points > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry is ${points} code points, outside the 1-280 gate`);
}
writeEntry(outputDir());

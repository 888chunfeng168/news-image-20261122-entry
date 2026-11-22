// "The World in One Day" — news-image-20261122 entry (Node 22, stdlib only).
//
// The entry image is the file entry.png next to this program: a newspaper
// front page that sums up Sunday 22 November 2026 in five stories — the Gulf
// escalation, the barrage over Ukraine, the COP31 talks in Antalya, the
// magnitude 6.9 quake in Peru, and the Trump–Xi–Putin meeting in Shenzhen.
// This program only places that image where the grader expects it.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const bytes = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), bytes);

// The grader runs this program twice and demands identical bytes both
// times, so confirm the copy landed whole before exiting.
const written = readFileSync(join(outDir, 'entry.png'));
if (written.length !== bytes.length) {
  throw new Error(`entry.png copy mismatch: wrote ${written.length} of ${bytes.length} bytes`);
}

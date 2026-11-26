import { closeSync, copyFileSync, mkdirSync, openSync, readSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const MAX_BYTES = 1048576;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const src = join(botDir, "entry.png");
const stat = statSync(src);
if (stat.size > MAX_BYTES) {
  throw new Error(`entry.png is ${stat.size} bytes, over the 1 MiB cap`);
}
const fd = openSync(src, "r");
const head = Buffer.alloc(8);
readSync(fd, head, 0, 8, 0);
closeSync(fd);
if (!head.equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG (bad magic bytes)");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));

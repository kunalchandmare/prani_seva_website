#!/usr/bin/env node
/**
 * Writes public JPEGs from scripts/photo-data/*.b64.
 * The photos are stored as text so they can be committed. Existing files are
 * left alone, so a local original is not overwritten.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "scripts/photo-data");

for (const name of readdirSync(dataDir)) {
  if (!name.endsWith(".jpg.b64")) continue;
  const file = name.slice(0, -".b64".length);
  const dest = join(root, file === "og.jpg" ? "public/og.jpg" : `public/photos/${file}`);
  if (existsSync(dest)) continue;
  mkdirSync(dirname(dest), { recursive: true });
  const b64 = readFileSync(join(dataDir, name), "utf8").replace(/\s+/g, "");
  writeFileSync(dest, Buffer.from(b64, "base64"));
}

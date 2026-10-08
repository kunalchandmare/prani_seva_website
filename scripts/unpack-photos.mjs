#!/usr/bin/env node
/**
 * Writes public JPEGs from scripts/photo-data.
 * Numbered parts (hero.jpg.00.b64, hero.jpg.01.b64, …) are joined in order.
 * A single hero.jpg.b64 is used only when there are no numbered parts.
 * Existing image files are left alone.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "scripts/photo-data");

const groups = new Map();
for (const name of readdirSync(dataDir)) {
  const part = name.match(/^(.+\.jpg)\.(\d+)\.b64$/);
  const whole = name.match(/^(.+\.jpg)\.b64$/);
  const key = part?.[1] ?? whole?.[1];
  if (!key) continue;
  const entry = groups.get(key) ?? { parts: [], whole: null };
  if (part) entry.parts.push(name);
  else entry.whole = name;
  groups.set(key, entry);
}

for (const [file, entry] of groups) {
  const names = entry.parts.length
    ? entry.parts.sort()
    : entry.whole
      ? [entry.whole]
      : [];
  if (names.length === 0) continue;
  const dest = join(root, file === "og.jpg" ? "public/og.jpg" : `public/photos/${file}`);
  if (existsSync(dest)) continue;
  mkdirSync(dirname(dest), { recursive: true });
  const b64 = names.map((name) => readFileSync(join(dataDir, name), "utf8").replace(/\s+/g, "")).join("");
  writeFileSync(dest, Buffer.from(b64, "base64"));
}

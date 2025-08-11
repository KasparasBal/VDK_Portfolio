/* eslint-disable no-console */
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function isImage(file) {
  return /\.(png|jpg|jpeg|webp|avif)$/i.test(file);
}

function toWebpName(file) {
  return file.replace(/\.(png|jpg|jpeg|webp|avif)$/i, ".webp");
}

async function main() {
  const artworkDir = path.join(process.cwd(), "public", "artwork");
  const thumbsDir = path.join(artworkDir, "thumbs");
  const fullDir = path.join(artworkDir, "full");
  const blurDir = path.join(artworkDir, "blur");
  await Promise.all([
    ensureDir(thumbsDir),
    ensureDir(fullDir),
    ensureDir(blurDir),
  ]);

  const files = await fsp.readdir(artworkDir);
  const images = files.filter(isImage);

  const manifest = [];

  for (const file of images) {
    const input = path.join(artworkDir, file);
    const baseWebp = toWebpName(file);
    const outFull = path.join(fullDir, baseWebp);
    const outThumb = path.join(thumbsDir, baseWebp);
    const outBlur = path.join(blurDir, baseWebp);

    try {
      const image = sharp(input);
      const metadata = await image.metadata();

      // Full: convert to WebP with quality and limit size if extremely large
      const maxFull = 2000; // px
      const widthFull =
        metadata.width && metadata.width > maxFull ? maxFull : metadata.width;
      await image
        .resize({ width: widthFull })
        .webp({ quality: 80 })
        .toFile(outFull);

      // Thumb: small WebP
      await sharp(input)
        .resize({ width: 600 })
        .webp({ quality: 60 })
        .toFile(outThumb);

      // Blur placeholder: very small WebP
      await sharp(input)
        .resize({ width: 32 })
        .webp({ quality: 40 })
        .toFile(outBlur);

      manifest.push({
        id: (() => {
          const m = file.match(/art_(\d+)/i);
          return m ? Number(m[1]) : undefined;
        })(),
        original: `/artwork/${file}`,
        full: `/artwork/full/${baseWebp}`,
        thumb: `/artwork/thumbs/${baseWebp}`,
        blur: `/artwork/blur/${baseWebp}`,
      });
      console.log("Processed", file);
    } catch (err) {
      console.warn("Failed to process", file, err);
    }
  }

  manifest.sort((a, b) => {
    const ai = a.id ?? Number.POSITIVE_INFINITY;
    const bi = b.id ?? Number.POSITIVE_INFINITY;
    return ai - bi;
  });

  await fsp.writeFile(
    path.join(artworkDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );
  console.log("Manifest written with", manifest.length, "items");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

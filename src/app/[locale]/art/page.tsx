import path from "path";
import { promises as fs } from "fs";
// Avoid importing caching helpers that can pull in server runtime overhead
import Footer from "../../components/footer";
import Gallery from "./Gallery";

type ManifestItem = {
  id?: number;
  original: string;
  full: string;
  thumb: string;
  blur: string;
};

function parseNumericId(filename: string): number {
  const match = filename.match(/art_(\d+)/i);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

export default async function ArtPage() {
  const artworkDir = path.join(process.cwd(), "public", "artwork");

  let manifest: ManifestItem[] | null = null;
  try {
    const raw = await fs.readFile(
      path.join(artworkDir, "manifest.json"),
      "utf8"
    );
    manifest = JSON.parse(raw) as ManifestItem[];
  } catch {
    manifest = null;
  }

  let items: {
    id: number;
    thumbSrc: string;
    fullSrc: string;
    blurSrc?: string;
  }[] = [];
  if (manifest && manifest.length > 0) {
    items = manifest
      .map((m, idx) => ({
        id: m.id ?? idx + 1,
        thumbSrc: m.thumb,
        fullSrc: m.full,
        blurSrc: m.blur,
      }))
      .sort((a, b) => a.id - b.id);
  } else {
    // If no manifest, do not attempt to scan the directory in production – keeps bundle lean
    items = [];
  }

  return (
    <>
      <Gallery items={items} />
      <Footer />
    </>
  );
}

export const revalidate = 3600;
export const dynamic = "force-static";

import path from "path";
import { promises as fs } from "fs";
import { unstable_cache } from "next/cache";
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

  const readManifest = unstable_cache(
    async (): Promise<ManifestItem[] | null> => {
      try {
        const raw = await fs.readFile(
          path.join(artworkDir, "manifest.json"),
          "utf8"
        );
        return JSON.parse(raw) as ManifestItem[];
      } catch {
        return null;
      }
    },
    ["artwork-manifest"],
    { revalidate: 3600 }
  );

  const manifest = await readManifest();

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
    const files = await fs.readdir(artworkDir).catch(() => [] as string[]);
    const imageFiles = files
      .filter((f) => /\.(png|jpg|jpeg|gif|webp|avif)$/i.test(f))
      .sort((a, b) => parseNumericId(a) - parseNumericId(b));
    items = imageFiles.map((file, index) => ({
      id:
        parseNumericId(file) !== Number.POSITIVE_INFINITY
          ? parseNumericId(file)
          : index + 1,
      thumbSrc: `/artwork/${file}`,
      fullSrc: `/artwork/${file}`,
    }));
  }

  return (
    <>
      <Gallery items={items} />
      <Footer />
    </>
  );
}

export const revalidate = 3600;

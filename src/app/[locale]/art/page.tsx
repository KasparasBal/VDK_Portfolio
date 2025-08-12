// Static import of generated manifest for fully static rendering
import artManifest from "@/data/art-manifest";
import Footer from "../../components/footer";
import Gallery from "./Gallery";

type ManifestItem = {
  id?: number;
  original: string;
  full: string;
  thumb: string;
  blur: string;
};

// no-op: numeric id parsing is not needed once manifest is static-imported

export default function ArtPage() {
  const manifest = (artManifest as unknown as ManifestItem[]) ?? [];

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
    items = [];
  }

  return (
    <>
      <Gallery items={items} />
      {/* Use a light footer variant on white backgrounds to avoid a black strip look */}
      <Footer variant="light" />
    </>
  );
}

export const dynamic = "force-static";

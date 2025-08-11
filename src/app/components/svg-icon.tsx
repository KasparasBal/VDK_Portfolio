"use client";

import { useEffect, useState } from "react";

interface SvgIconProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  hovered?: boolean;
}

// Inlines an SVG from /public so internal CSS/animation can react to :hover or classes
export default function SvgIcon({
  src,
  className,
  width = 24,
  height = 24,
  hovered = false,
}: SvgIconProps) {
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => r.text())
      .then((text) => {
        if (!cancelled) setSvg(text);
      })
      .catch(() => setSvg(""));
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <span
      className={`${className ?? ""} ${hovered ? "svg-hovered" : ""}`}
      style={{ display: "inline-block", width, height }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}



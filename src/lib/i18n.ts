export type Locale = "en" | "lt";

export const supportedLocales: Locale[] = ["en", "lt"];

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return supportedLocales.includes(segment as Locale)
    ? (segment as Locale)
    : "en";
}

export function switchLocaleInPath(
  pathname: string,
  nextLocale: Locale
): string {
  const url = new URL(pathname, "https://dummy.local");
  const hash = url.hash;
  const segments = url.pathname.split("/");
  if (supportedLocales.includes(segments[1] as Locale)) {
    segments[1] = nextLocale;
  } else {
    segments.splice(1, 0, nextLocale);
  }
  const newPath = segments.join("/") || "/";
  return `${newPath}${hash ?? ""}`;
}

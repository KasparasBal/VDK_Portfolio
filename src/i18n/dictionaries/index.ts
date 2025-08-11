import { en } from "./en";
import { lt } from "./lt";
import type { Dictionary } from "./en";
import type { Locale } from "@/lib/i18n";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  lt,
};

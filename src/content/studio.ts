import localStudio from "./studio.json";

export type Price = { name: string; amount: string };
export type Testimonial = { quote: string; isPlaceholder: boolean };

export type Studio = {
  name: string;
  city: string;
  eyebrow: string;
  announcement: string;
  motto: string;
  email: string;
  phone: string;
  phoneIsPlaceholder: boolean;
  location: string;
  hours: string;
  instagram: string;
  facebook: string;
  accessibility: string;
  cancellation: string;
  prices: Price[];
  testimonials: Testimonial[];
  footer: string;
};

export const localStudioData = localStudio as Studio;

const STUDIO_URL =
  "https://raw.githubusercontent.com/kunalchandmare/prani_seva_website/main/src/content/studio.json";

export function mergeStudio(remote: unknown): Studio {
  if (!remote || typeof remote !== "object") return localStudioData;
  const value = remote as Partial<Studio>;
  if (typeof value.name !== "string" || typeof value.email !== "string") return localStudioData;
  return {
    ...localStudioData,
    ...value,
    prices: Array.isArray(value.prices) && value.prices.length > 0 ? value.prices : localStudioData.prices,
    testimonials:
      Array.isArray(value.testimonials) && value.testimonials.length > 0
        ? value.testimonials
        : localStudioData.testimonials,
  };
}

export async function loadStudio(): Promise<Studio> {
  try {
    const response = await fetch(STUDIO_URL, { signal: AbortSignal.timeout(4000) });
    if (!response.ok) return localStudioData;
    return mergeStudio(await response.json());
  } catch {
    return localStudioData;
  }
}

export function safeWebUrl(value: string): string {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") return url.toString();
  } catch {
    return "";
  }
  return "";
}

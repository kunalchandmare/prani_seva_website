import localStudio from "./studio.json";

export type Price = { name: string; amount: string };
export type Testimonial = { quote: string; isPlaceholder: boolean };
export type StudioImage = { src: string; alt: string };

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
  images: {
    hero: StudioImage;
    calm: StudioImage;
    rescue: StudioImage;
    hands: StudioImage;
  };
};

export const localStudioData = localStudio as Studio;

const STUDIO_URL =
  "https://raw.githubusercontent.com/kunalchandmare/prani_seva_website/main/src/content/studio.json";

function imageSrc(value: string): string {
  const trimmed = value.trim();
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return trimmed;
  return safeWebUrl(trimmed);
}

function mergeImage(remote: StudioImage | undefined, fallback: StudioImage): StudioImage {
  const src = remote && typeof remote.src === "string" ? imageSrc(remote.src) : "";
  if (!src) return fallback;
  const alt = remote && typeof remote.alt === "string" && remote.alt.trim() ? remote.alt.trim() : fallback.alt;
  return { src, alt };
}

export function mergeStudio(remote: unknown): Studio {
  if (!remote || typeof remote !== "object") return localStudioData;
  const value = remote as Partial<Studio>;
  if (typeof value.name !== "string" || typeof value.email !== "string") return localStudioData;
  const images = value.images;
  return {
    ...localStudioData,
    ...value,
    prices: Array.isArray(value.prices) && value.prices.length > 0 ? value.prices : localStudioData.prices,
    testimonials:
      Array.isArray(value.testimonials) && value.testimonials.length > 0
        ? value.testimonials
        : localStudioData.testimonials,
    images: {
      hero: mergeImage(images?.hero, localStudioData.images.hero),
      calm: mergeImage(images?.calm, localStudioData.images.calm),
      rescue: mergeImage(images?.rescue, localStudioData.images.rescue),
      hands: mergeImage(images?.hands, localStudioData.images.hands),
    },
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

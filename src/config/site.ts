export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Deltarune Kris Fight Wiki",
  shortName: "Deltarune Kris Fight",
  logoText: "DK",
  tagline: "Boss Guide, Combat Mechanics & Battle Tips",
  description: "Explore Deltarune Kris Fight Wiki with battle guides, combat tips, boss strategies, character details, and fan resources for Kris battles.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://deltarune-kris-fight.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://deltarune-kris-fight.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://deltarune.com/",
  heroVideoId: "WHnjKwVKIjg",
  social: {
    discord: "https://www.reddit.com/r/Deltarune/",
    youtube: "https://www.youtube.com/@TobyFox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

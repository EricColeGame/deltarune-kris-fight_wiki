import { LucideIcon, BookOpen, Swords, Users, Sparkles, Tv, Cog } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon?: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "theory", path: "/theory", icon: Sparkles, isContentType: true },
  { key: "media", path: "/media", icon: Tv, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

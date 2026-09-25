import { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon?: LucideIcon;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES: string[] = [];

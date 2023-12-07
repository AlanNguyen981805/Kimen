import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "vi"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    vi: "/pfadnamen",
  },
  "/home": "/home",
  "/about-us": "/about-us",
  "/our-process": "/our-process",
  "/our-history": "/our-history",
  "/contact-us": "/contact-us",
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

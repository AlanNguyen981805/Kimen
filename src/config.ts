import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'vi'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    vi: '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
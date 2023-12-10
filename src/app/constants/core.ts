export type ILink =
  | "/home"
  | "/about-us"
  | "/our-process"
  | "/our-history"
  | "/contact-us";

export type IMenu = {
  key: number;
  title: string;
  link: ILink;
};

export const MENUS: IMenu[] = [
  {
    key: 1,
    title: "home",
    link: "/home",
  },
  {
    key: 2,
    title: "about_us",
    link: "/about-us",
  },
  {
    key: 3,
    title: "our_process",
    link: "/our-process",
  },
  {
    key: 4,
    title: "our_history",
    link: "/our-history",
  },
  {
    key: 4,
    title: "contact_us",
    link: "/contact-us",
  },
];

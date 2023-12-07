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
    title: "Home",
    link: "/home",
  },
  {
    key: 2,
    title: "About us",
    link: "/about-us",
  },
  {
    key: 3,
    title: "Our Process",
    link: "/our-process",
  },
  {
    key: 4,
    title: "Our History",
    link: "/our-history",
  },
  {
    key: 4,
    title: "Contact Us",
    link: "/contact-us",
  },
];

export type ILink =
  | "/home"
  | "/our-story"
  | "/our-product"
  | "/kimens-brand"
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
    title: "our_story",
    link: "/our-story",
  },
  {
    key: 3,
    title: "our_product",
    link: "/our-product",
  },
  {
    key: 4,
    title: "kimens_brand",
    link: "/kimens-brand",
  },
  {
    key: 4,
    title: "contact_us",
    link: "/contact-us",
  },
];

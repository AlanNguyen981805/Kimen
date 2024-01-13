export type ILink =
  | "/home"
  | "/about-us"
  | "/our-product"
  | "/our-brand"
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
    title: "our_product",
    link: "/our-product",
  },
  {
    key: 4,
    title: "our_brand",
    link: "/our-brand",
  },
  {
    key: 4,
    title: "contact_us",
    link: "/contact-us",
  },
];

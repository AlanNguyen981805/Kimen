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

export const INFO_WEBSITE = {
  email: 'info@kimen.com.vn',
  emaily: 'emaly.kim@kimen.com.vn',
  phone: '(+84) 326 072 508',
  address: 'ROOM 102 ¡ST FLOOR, HALO BUILDING, 39 DINH CONG TRANG, TAN DINH WARD, DISTRICT1, HCMC'
}
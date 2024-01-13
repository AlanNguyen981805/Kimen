"use client";

import { MENUS } from "@/app/constants/core";
import { usePathname } from "@/navigation";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { RenderTitleMenu } from ".";

const Menu = () => {
  const pathname = usePathname();
  const tMenu = useTranslations('Menu')

  return (
    <>
      {MENUS.map((menu) => (
        <Link
          href={`/en/${menu.link}`}
          key={menu.key}

          className={classNames(
            "relative uppercase ml-10 tracking-[1px] after:content-[''] after:bottom-[-5px] after:bg-pink-500 after:duration-300 cursor-pointer after:left-0 after:w-0 after:h-[2px] after:absolute hover:after:w-full",
            {
              "after:w-full": menu.link === pathname,
            }
          )}
        >
          {tMenu(menu.title)}
        </Link>
      ))}
    </>
  );
};

export default Menu;

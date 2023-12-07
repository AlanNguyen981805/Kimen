"use client";

import { MENUS } from "@/app/constants/core";
import { Link, usePathname } from "@/navigation";
import classNames from "classnames";

const Menu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6">
      {MENUS.map((menu) => (
        <Link
          href={menu.link}
          key={menu.key}
          className={classNames(
            "relative uppercase ml-10 tracking-[1px] after:content-[''] after:bottom-[-5px] after:bg-pink-500 after:duration-300 cursor-pointer after:left-0 after:w-0 after:h-[2px] after:absolute hover:after:w-full",
            {
              "after:w-full": menu.link === pathname,
            }
          )}
        >
          {menu.title}
        </Link>
      ))}
    </ul>
  );
};

export default Menu;

"use client";

import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

interface IProps {
  children: ReactNode;
}

const WrapMenu = ({ children }: IProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        "flex w-full fixed bg-white  justify-between items-center  px-10 transition-transform transition-top duration-500 ease-in-out",
        {
          " translate-y-0 z-10 shadow-md ": scrollPosition > 1000,
          "-translate-y-full -z-10":
            scrollPosition < 1000 && scrollPosition > 50,
        }
      )}
    >
      {children}
    </div>
  );
};

export default WrapMenu;

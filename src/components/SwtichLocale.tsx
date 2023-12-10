"use client";

import { usePathname, useRouter } from "@/navigation";
import Image from "next/image";
import { useTransition } from "react";

const SwtichLocale = () => {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();

  const onSwichLocale = (data: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: data });
    });
  };

  return (
    <div className="flex items-center gap-1">
      <Image
        width={30}
        height={30}
        src={"/svgs/vietnam.svg"}
        className="cursor-pointer"
        alt="vietnam"
        onClick={() => onSwichLocale("vi")}
      />
      <Image
        width={30}
        height={30}
        src={"/svgs/england.svg"}
        className="cursor-pointer"
        alt="vietnam"
        onClick={() => onSwichLocale("en")}
      />
    </div>
  );
};

export default SwtichLocale;

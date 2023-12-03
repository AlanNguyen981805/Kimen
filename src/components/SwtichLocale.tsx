"use client"

import { usePathname, useRouter } from '@/navigation';
import React, { useTransition } from 'react';

const SwtichLocale = ({titleBtn1, titleBtn2}: {titleBtn1: string, titleBtn2: string}) => {
    const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

    const onSwichLocale = (data: string) => {
        startTransition(() => {
            router.replace(pathname, {locale: data});
          });
    }
    return (
        <div>
            <button className='px-4 py-2 bg-red-400 rounded-sm' onClick={() => onSwichLocale('en')}>{titleBtn1}</button>
            <button className='px-4 py-2 bg-blue-300 rounded-sm' onClick={() => onSwichLocale('vi')}>{titleBtn2}</button>
        </div> 
    );
};

export default SwtichLocale;
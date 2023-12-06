import Section from '@/components/Section';
import Section2 from '@/components/Section2';
import Slider from '@/components/Slider';
import Image from 'next/image';
import React from 'react';


const AboutUs = () => {

  
    const BenefitBox = ({icon, name}: {icon: string; name: string}) => {
        return (
            <div className="flex justify-center px-14 items-center flex-col w-1/2 mb-6">
              <Image
                src={icon}
                alt="Next.js Logo"
                width={60}
                height={30}
                priority
              />
              <span className="mt-5 block tracking-[3px]">{name}</span>

              <p className='text-center text-[#6B6B6B] text-base pt-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
            </div>
        )
    }

    return (
        <div>
           <div className='relative h-[500px] flex items-center justify-center'>
                <Image src={'/About-us-TA-parallax.jpg'} fill objectFit='cover' alt='about-us' />
                <div className='z-10 text-center'>
                    <p className='text-xl text-[#737373]'>More to know</p>
                    <h3 className='text-4xl text-[#000] tracking-[6px]'>ABOUT US</h3>
                </div>
           </div>

           <div className='flex py-28'>
           <BenefitBox icon={'/svgs/grow.svg'} name="GROWING ORGANIC" />
           <BenefitBox icon={'/svgs/grow.svg'} name="HARVEST PLAN" />
           <BenefitBox icon={'/svgs/grow.svg'} name="SEED PLANTING" />
           <BenefitBox icon={'/svgs/grow.svg'} name="VEGGIE CARE" />
           </div>

          <Section />

<div>
    <Slider />
</div>
          <Section2 />


        </div>
    );
};

export default AboutUs;
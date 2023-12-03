import React from 'react';
import ProcessCircle from './ProcessCircle';

const Process = () => {
    return (
        <div className='flex flex-col justify-center items-center py-[100px] bg-[#F3EEE9] mt-20'>
            <span className='text-xl'>The cultivation process</span>
            <h3 className='text-[36px] tracking-[3px]'>OUR GARDEN PROGRESS</h3>
            <div className='flex gap-16 mt-5'>
                <ProcessCircle  />
                <ProcessCircle />
                <ProcessCircle />
                <ProcessCircle />
            </div>
        </div>
    );
};

export default Process;
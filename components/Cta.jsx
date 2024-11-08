import React from 'react'
import Button from './ui/Button'

import CtaImg from "@/public/cta-img.svg";
import Image from 'next/image';

export default function Cta() {
    return (
        <div className="py-20 pt-32">
            <div className='container mx-auto bg-green-clr px-10  py-16 rounded-md flex relative'>
                <div className="w-1/2">
                    <h2 className='color-white font-bold text-5xl mb-8'>
                        Get software that fits <br />
                        you perfectly
                    </h2>
                    <Button variant='secondary'>Talk to us</Button>
                </div>
                <div className="w-1/2">
                    <Image src={CtaImg} alt="Cta Image" className='absolute bottom-0 right-0' />
                </div>
            </div>
        </div>
    )
}

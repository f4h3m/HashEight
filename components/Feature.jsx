import React from 'react'
import featureImage from "@/public/feature-img.svg";
import Image from 'next/image';

export default function Feature() {
    return (
        <div className='relative overflow-hidden py-20'>
            <div className='w-[180px] h-[180px] bg-cyan-clr rounded-full absolute -left-[100px] top-1/2 -translate-y-1/2 blur-[100px]'></div>
            <div className="container flex justify-center mx-auto">
                <div className="w-1/2">
                    <h2 className='text-4xl font-semibold text-center'>
                        The complete automation platform <br />
                        for modern businesses
                    </h2>
                    <p className='text-center mt-4 max-w-[80%] mx-auto'>
                        Accounts payable isnot just a single click. Its a comprehensive supply chain that requires a secure, streamlined solution.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex gap-5 mt-14 items-center">
                <div className="w-1/2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi, dolores deserunt deleniti fugiat repellendus non consectetur cum praesentium voluptatem placeat tempore sint sapiente magni nobis maiores ad laudantium esse!
                    </p>
                </div>
                <div className="w-1/2">
                    <Image src={featureImage} alt='feature image' />
                </div>
            </div>
        </div>
    )
}

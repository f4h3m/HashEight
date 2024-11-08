import React from 'react'
import { ChevronRight } from 'lucide-react';
export default function Badge({ children }) {
    return (
        <div className='bg-white text-black text-[12px] font-bold px-6 rounded-full uppercase py-1 pr-4 mb-5 flex items-center'>
            {children}
            <ChevronRight size={16} className='ml-2' />
        </div>
    )
}

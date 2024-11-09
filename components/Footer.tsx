import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container mx-auto border-t border-slate-500 py-4">
                <div className='grid grid-cols-2'>
                    <p className='font-semibold'>
                        &copy; HashEight Copyright 2024
                    </p>
                    <ul className='flex justify-end gap-4 font-semibold'>
                        <li className='border-r-2 pr-4'>
                            <Link href="#">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Terms & Condition
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

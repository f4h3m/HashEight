import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/logo.svg'

export default function Header() {
    return (
        <header className='grid grid-cols-2 justify-between items-center py-4 relative'>
            <Link href="/">
                <Image src={Logo} alt='HashEight Logo' />
            </Link>
            <ul className='flex justify-end gap-8 font-bold'>
                <li>
                    <Link href="/">
                        Features
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    )
}

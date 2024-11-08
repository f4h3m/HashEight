import React from 'react'
import Button from './ui/Button'

export default function Faq() {
    return (
        <div className='container mx-auto py-20 flex gap-4 items-center'>
            <div className="w-1/2">
                <h1 className='text-4xl font-semibold mb-5'>
                    What would you like to <br />
                    know about Us?
                </h1>
                <Button variant='secondary'>
                    Talk to us
                </Button>
            </div>
            <div className="w-1/2">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi doloribus nisi quasi dolor nemo nulla sapiente modi molestiae accusantium culpa praesentium commodi, iusto similique neque magni rem fuga velit.
                </p>
            </div>
        </div>
    )
}

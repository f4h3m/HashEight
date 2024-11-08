
import React from 'react';

const Button = ({ children, variant = 'primary' }) => {
    const buttonStyles = {
        primary:
            'bg-white text-black font-bold py-2 px-8 rounded',
    };

    return (
        <button className={buttonStyles[variant]}>
            {children}
        </button>
    );
};

export default Button;
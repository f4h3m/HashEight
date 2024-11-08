
import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
    const buttonStyles = {
        secondary:
            'bg-white text-black font-bold py-2 px-8 rounded',
    };

    return (
        <button className={buttonStyles[variant]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface NavButtonProps {
    to: string;
    label: string;
    current: string;
    setCurrent(current: string): void;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label, current, setCurrent }) => {
    return (
        <Link to={to}
            className={current === to ? 'active' : ''}
            onClick={() => setCurrent(to)}
        >
            {label}
        </Link>
    );
}

export default NavButton;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface NavButtonProps {
    to: string;
    label: string;
    current: string;
    setCurrent(current: string): void;
    className?: string;
    children?: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ to, label, current, setCurrent, children, className = "" }) => {
    return (
        <Link to={to}
            className={className ? className : current === to ? 'active' : '' + ' ' }
            onClick={() => setCurrent(to)}
        >
            {
                children ? children : label
            }
        </Link>
    );
}

export default NavButton;

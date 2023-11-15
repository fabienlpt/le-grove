import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
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
            { current === to && !children &&
                <FontAwesomeIcon icon={faCircle} className="circle" width={4} height={4} style={{ marginRight: 10 }} />
            }
            { children ? children : label }
        </Link>
    );
}

export default NavButton;

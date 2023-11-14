import React from 'react';
import NavButton from './navButton';
import './style.css';

const Header: React.FC = () => {
    const [current, setCurrent] = React.useState<string>(window.location.pathname);

    return (
        <div className="header">
            <NavButton to="/" label="Home" current={current} setCurrent={setCurrent} />
            <NavButton to="/missions" label="Missions" current={current} setCurrent={setCurrent} />
            <NavButton to="/doc" label="Documentation" current={current} setCurrent={setCurrent} />
            <NavButton to="/contact" label="Contact" current={current} setCurrent={setCurrent} />
        </div>
    );
}

export default Header;

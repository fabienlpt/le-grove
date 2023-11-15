import React from 'react';
import { sidebar } from '../../data/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <ul>
                {sidebar.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={`#${item.slug}`}>{item.title}</a>
                            {item.children && (
                                <ul>
                                    {item.children.map((child, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={`#${child.slug}`}>{child.title}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => setIsOpen(!isOpen)} className='sidebar-toggle'>
                <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
            </button>
        </div>


    );
}

export default SideBar;

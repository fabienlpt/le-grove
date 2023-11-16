import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css';

interface SideBarProps {
    sidebar: {
        title: string;
        slug: string;
        children:{
            title: string;
            slug: string;
        }[]
    }[];
    current: string;
    setCurrent: (slug: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ sidebar, current, setCurrent }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        var sidebar = document.querySelector('.sidebar') as HTMLElement;
        if (window.scrollY > 100) {
            sidebar.style.position = 'absolute';
            sidebar.style.marginTop = '0px';
        }
    }, []);


    window.addEventListener('scroll', function() {
        var sidebar = document.querySelector('.sidebar') as HTMLElement;
        var docPage = document.querySelector('.doc-page');
        
        if (!sidebar || !docPage) {
            return;
        }
        var docPageRect = docPage.getBoundingClientRect();
        if (this.window.scrollY < 100) {
            sidebar.style.position = 'fixed';
            sidebar.style.marginTop = '160px';
        } else if (window.scrollY > docPageRect.bottom - 480 || window.scrollY < docPageRect.top) {
            sidebar.style.position = 'absolute';
            sidebar.style.marginTop = '0px';

        } else {
            sidebar.style.position = 'fixed';
            sidebar.style.marginTop = '160px';
        }
    });
    return (
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <ul>
                {sidebar?.map((item, index) => {
                    return (
                        <li key={index}>
                            <p className='sidebar-title'>{item.title}</p>
                            {item.children && (
                                <ul>
                                    {item.children.map((child, index) => {
                                        return (
                                            <li key={index}  className={`sidebar-subtitle ${child.slug === current ? 'current' : ''}`}>
                                                <a href={`#${child.slug}`} onClick={() => setCurrent(child.slug)}>{child.title}</a>
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

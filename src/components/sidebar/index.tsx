import React from 'react';
import { sidebar } from '../../data/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [current, setCurrent] = React.useState(sidebar[0].children[0].slug);

    // window.addEventListener('scroll', function() {
    //     var sidebar = document.querySelector('.sidebar') as HTMLElement;
    //     var docPage = document.querySelector('.doc-page');
        
    //     if (!sidebar || !docPage) {
    //         return;
    //     }
    //     var docPageRect = docPage.getBoundingClientRect();
    
    //     if (window.scrollY > docPageRect.bottom || window.scrollY < docPageRect.top) {
    //         sidebar.style.position = 'absolute';
    //         sidebar.style.top = '0';
            
    //     } else {
    //         sidebar.style.position = 'fixed';
    //     }
    // });
    return (
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <ul>
                {sidebar.map((item, index) => {
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

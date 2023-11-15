import React from 'react';
import { sidebar } from '../../data/sidebar';
import './style.css';

const SideBar: React.FC = () => {
    return (
        <div className='sidebar'>
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
        </div>


    );
}

export default SideBar;

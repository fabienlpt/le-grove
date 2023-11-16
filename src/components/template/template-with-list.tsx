import React from 'react';
import './style.css';

interface TemplateWithListProps {
    content: any;
}

const TemplateWithList: React.FC<TemplateWithListProps> = (props) => {
    React.useEffect(() => {
        console.log(props.content);
    }, []);
    return (
        <ul className='template template-list'>
            {
                props.content.datas?.map((element: any, index: number) => {
                    return (
                        <li key={index}>
                            {element}
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default TemplateWithList;

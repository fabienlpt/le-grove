import React from 'react';
import SideBar from '../../components/sidebar';
import './style.css';

import { sidebar } from '../../data/sidebar';
import { documentation } from '../../data/documentation';

import TemplateWithSubSection from '../../components/template/template-with-subsection';
import TemplateWithList from '../../components/template/template-with-list';
import TemplateWithTable from '../../components/template/template-with-table';

const Documentation: React.FC = () => {
    const [currentElement, setCurrentElement] = React.useState(sidebar[0].children[0].slug);
    const [currentElementData, setCurrentElementData] = React.useState(documentation.find((element) => element.slug === currentElement));
    
    React.useEffect(() => {
        setCurrentElementData(documentation.find((element) => element.slug === currentElement));
    } , [currentElement]);

    return (
        <div className='page-container doc-page'>
            <SideBar sidebar={sidebar} current={currentElement} setCurrent={setCurrentElement} />
            <div className='content'>
                <p className='parent-element'>
                    {
                        currentElementData?.parent
                    }
                </p>
                <h1 className='title'>
                    {
                        currentElementData?.content.title
                    }
                </h1>
                <div className='description'>
                    {
                        currentElementData?.content.description.map((element, index) => {
                            return (
                                <p key={index}>
                                    {element}
                                    <br />
                                </p>
                            );
                        })
                    }
                </div>
                <div className='content-container'>
                    {
                        currentElementData?.content.type === 'list' ?
                            <TemplateWithList content={currentElementData.content} />
                        : currentElementData?.content.type === 'table' ?
                            <TemplateWithTable content={currentElementData.content} />
                        : currentElementData?.content.type === 'subsections' ?
                            <TemplateWithSubSection content={currentElementData.content} />
                        : null
                    }
                </div>
                <p className='conclusion'>
                    {
                        currentElementData?.content.conclusion

                    }
                </p>
            </div>
        </div>
    );
}

export default Documentation;

import React from 'react';
import './style.css';
import SubSection from '../subsection';

interface TemplateWithSubSectionProps {
    content: any;
}

const TemplateWithSubSection: React.FC<TemplateWithSubSectionProps> = (props) => {
    const [currentSubSection, setCurrentSubSection] = React.useState('' as any);
    React.useEffect(() => {
        console.log(props.content);
    }, []);
    return (
        <div className='template'>
            {
                props.content.datas.map((subSection: any) => {
                    return (
                        <SubSection content={subSection} currentSubSection={currentSubSection} setCurrentSubSection={setCurrentSubSection} />
                    );
                })
            }
        </div>
    );
}

export default TemplateWithSubSection;

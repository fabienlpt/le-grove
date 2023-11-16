import React from 'react';
import './style.css';

interface TemplateWithSubSectionProps {
    content: any;
}

const TemplateWithSubSection: React.FC<TemplateWithSubSectionProps> = (props) => {
    return (
        <div className='template'>
            ceci est une sous section
        </div>
    );
}

export default TemplateWithSubSection;

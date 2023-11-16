import React from 'react';
import './style.css';

interface TemplateWithTableProps {
    content: any;
}

const TemplateWithTable: React.FC<TemplateWithTableProps> = (props) => {
    return (
        <div className='template'>
            ceci est un tableau
        </div>
    );
}

export default TemplateWithTable;

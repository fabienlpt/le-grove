import React from 'react';
import './style.css';

interface SubSectionProps {
    content: any;
    currentSubSection: any;
    setCurrentSubSection(subSection: any): void;
}

const SubSection: React.FC<SubSectionProps> = (props) => {
    const handleSelectSubSection = (subSection: any) => {
        if (props.currentSubSection === subSection) {
            props.setCurrentSubSection('');
        } else {
            props.setCurrentSubSection(subSection);
        }
    }
    return (
        <div className={props.currentSubSection === props.content.title ? 'subsection subsection-current' : 'subsection'}>
            <div className='subsection-content'>
                <h2>{props.content.title}</h2>
                {
                    props.currentSubSection === props.content.title &&
                        <p>{props.content.desc}</p>
                }
            </div>
            <button onClick={() => handleSelectSubSection(props.content.title)}>
                {
                    props.currentSubSection !== props.content.title ?
                        <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="fl&#195;&#168;che">
                            <path id="Vector" d="M22.9953 8.74265C27.7914 7.59342 32.7101 8.74265 37.7821 12.221C42.854 15.6993 45.2904 19.6067 45.8727 24.4488C46.4396 29.3063 45.1678 34.0104 42.0419 38.5767C39.0692 42.8978 35.3304 45.5641 30.8407 46.5601C26.351 47.5561 21.5549 46.3149 16.4829 42.8365C13.1425 40.5381 10.7368 37.9791 9.23512 35.129C7.73346 32.2789 7.18183 29.3063 7.58023 26.211C7.97863 23.1157 9.15851 20.1584 11.1045 17.3236C14.2305 12.7573 18.1991 9.89188 23.0106 8.72733L22.9953 8.74265Z" fill="white"/>
                            <path id="+" d="M24.5108 34.0334V20.1614H28.0808V34.0334H24.5108ZM19.4788 28.7974V25.3974H33.1128V28.7974H19.4788Z" fill="black"/>
                            </g>
                        </svg>
                        :
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 168 1">
                            <path id="Vector" d="M22.6045 7.92829C27.4006 6.77906 32.3194 7.92829 37.3913 11.4066C42.4633 14.885 44.8996 18.7924 45.4819 23.6345C46.0489 28.4919 44.777 33.1961 41.6511 37.7624C38.6784 42.0835 34.9396 44.7497 30.4499 45.7457C25.9603 46.7417 21.1641 45.5005 16.0922 42.0222C12.7518 39.7237 10.346 37.1648 8.84441 34.3147C7.34274 31.4646 6.79111 28.4919 7.18951 25.3966C7.58791 22.3014 8.76779 19.344 10.7138 16.5092C13.8397 11.9429 17.8084 9.07752 22.6198 7.91297L22.6045 7.92829Z" fill="white"/>
                            <path id="Vector_2" d="M21.1759 30.0569V26.1809H30.6279V30.0569H21.1759Z" fill="black"/>
                            </g>
                        </svg>
                }
            </button>
        </div>
    );
}

export default SubSection;

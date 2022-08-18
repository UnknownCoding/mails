import React from 'react'
import '../Section.css';

const Sections = ({Icon,title,color,selected}) => {
    return (
    <div className={`${selected ? "section-selected" : "section"}`} style={{borderBottom:`3px solid ${color}`,
                                                                color:`${selected && color}`}}>
        
        <Icon/>
        <h4>{title}</h4>

    </div>
    )
}

export default Sections
import React from 'react';
import './check-box.css';

const CheckBox = (props) => {
    
    const { value, onChange, children} = props;
    return(
        
        <div>
            <input type="checkbox" className="checkBox" onChange={(event)=>{onChange()}} checked={value} value="a1"></input>
            {children}
        </div>
    )
}

export default CheckBox;
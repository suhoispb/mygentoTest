import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    render() {
      const {label, value, placeholder, type='text', onChange, name, required } = this.props;
        return(
            <div className="inputContainer">
                <label> {label} </label>
                <input className="common form-control" onChange={(event)=>{onChange (event.target.value)}} type={type} placeholder={placeholder} value={value} name={name} required={required}></input>  
            </div>
        );
    };
};

export default Input;

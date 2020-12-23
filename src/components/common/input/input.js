import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    render() {
      const {label, value, placeholder, type='text', onChange} = this.props;
        return(
            <div className="inputContainer">
                <label> {label} </label>
                <input className="common form-control" onChange={(event)=>{onChange (event.target.value)}} type={type} placeholder={placeholder} value={value}></input>  
            </div>
        );
    };
};

export default Input;

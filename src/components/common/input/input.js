import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    render() {
      const {label, value, placeholder, type='text', onChange} = this.props;
        return(
            <div className="input-container">
                <label> {label} </label>
                <input className="salam form-control" onChange={(event)=>{onChange (event.target.value)}} type={type} placeholder={placeholder} value={value}></input>  
            </div>
        );
    };
};

export default Input;

import React from 'react';
import './modal.css';


const Modal = ({active, closeModal, children}) => {
    if (!active){
        return(null)
    } 
    return(
        <div className={active ? "modal active" : "modal"} onClick = { () => closeModal(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    )
}
export default Modal




 

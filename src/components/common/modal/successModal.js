import React from 'react'
import Modal from './modal'
const SuccessModal = ({active, closeModal, name}) => {
    return(
            <Modal active={active} closeModal={closeModal}>
                            <h2>Спасибо, {name}!</h2>
                            <p>Мы скоро свяжемся с вами</p>
                            <button onClick = { () => closeModal(true)} type="button" className="btn btn-primary">Понятно</button>               
            </Modal>
        
    )
}

export default SuccessModal;
import React from 'react'
import Modal from './modal'
import './privacyModal.css'

const PrivacyModal = ({active, closeModal}) => {
    
    return(
            <Modal active={active} closeModal={closeModal}>
                <div className="privacyModalContent">
                            <div className="policyBlock">
                                <div className="policyHeader">Политика конфиденциальности</div>
                                <button onClick = { () => closeModal(true)} type="button" className="btn">X</button>
                            </div>
                            <div className="content"><span>1.Общие положения</span>
                            <br/>
                                <div className="privacyTextContent">
                                Настоящая политика обработки персональных данных составлена в
                                соответствии с требованиями Федерального закона от 27.07.2006.
                                №152-Ф3 «О персональных данных» и опроделяет порядок обработки
                                персональных данных и меры по обеспечению безопасности персональных
                                данных, предпринимаемые Михайловым Иваном Сергеевичем (далее-
                                оператор).

                               1.1.Оператор ставит своей важнейшей целью и условием осуществления
                                своей деятельности соблюдение прав и свобод человека и гражданина при
                                обработке его персональных данных, в том числе защиты прав на
                                неприкоснованность частной жизни, личную и семейную тайну;

                               1.2.Настоящая политика Оператора в отношении обработки персональных
                                данных (далее - Политик) применяется ко всей информации, которую
                                Оператор может получить о посетителях веб-сайта.
                                </div>
                            </div>
                            <button onClick = { () => closeModal(true)} type="button" className="btn btn-primary">Я согласен</button>               
            
                </div>
            </Modal>
        
    )
}

export default PrivacyModal;
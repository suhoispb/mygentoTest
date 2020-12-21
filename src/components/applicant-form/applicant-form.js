import React, { Component } from 'react';
import CheckBox from '../common/check-box/check-box';
import Input from '../common/input/input';
import RadioButton from '../common/radio-buttons/radio-button';
import SuccessModal from '../common/modal/successModal';
import PrivacyModal from '../common/modal/privacyModal'
import FileInput from '../common/file-input/file-input'
import './applicant-form.css';

class  ApplicantForm extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            name:'',
            surname:'',
            email:'',
            cv:'',
            sex:'',
            githubUrl:'',
            isPrivacyChecked:false,
            isModalActive:false,
            isPrivacyModalActive:false,
            files:[],

        };
        this.onNameChange=this.onNameChange.bind(this)
        this.onSurnameChange=this.onSurnameChange.bind(this)
        this.onEmailChange=this.onEmailChange.bind(this)
        this.onGithubChange=this.onGithubChange.bind(this)
        this.onSexChange=this.radioChangeHandler.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.onPrivacyCheck=this.onPrivacyCheck.bind(this)
        this.closeModal=this.closeModal.bind(this)
        this.setPrivacyModal=this.setPrivacyModal.bind(this)
        this.closePrivacyModal=this.closePrivacyModal.bind(this)
    }


    onNameChange (value) {
        this.setState({name:value})
    };
    onSurnameChange (value) {
        this.setState({surname:value})
    };
    onEmailChange (value) {
        this.setState({email:value})
    };
    onGithubChange (value) {
        this.setState({githubUrl:value})
    };
    radioChangeHandler = (event) => {

        this.setState({sex: event.target.value});
    }
    onPrivacyCheck = (event) => {
        this.setState(prevState => (
            {isPrivacyChecked:!prevState.isPrivacyChecked }));
    }
    // Самый лучший вариант сетСтейта, если есть зависит от предыдущего стейта

    onSubmit (event) {
        event.preventDefault()
        this.setState({isModalActive:true});
    };

    setPrivacyModal() {
        this.setState({isPrivacyModalActive:true});
    }

    closePrivacyModal(){
        this.setState({isPrivacyModalActive:false})
    }

    closeModal(){
        this.setState({
            name:'',
            surname:'',
            email:'',
            cv:'',
            sex:'',
            githubUrl:'',
            isPrivacyChecked:false,
            isModalActive:false,
            files:[]
        })
    };

    render() {
        return(
            <div>
            <form className="application-form" onSubmit={this.onSubmit}>
                <div className="first-header">
                <h1>Анкета соискателя</h1>
                <h2>Личные данные</h2>
                </div>
                <Input label="Имя*" onChange={ this.onNameChange } value={this.state.name} placeholder="Имя"/>
                
                <Input label="Фамилия*" onChange={ this.onSurnameChange } value={this.state.surname} placeholder="Фамилия"/>
                
                <Input label="Электронная почта*" onChange={ this.onEmailChange } value={this.state.email} type="email" placeholder="Электронная почта"/>
                
                <FileInput closeDropZone={this.closeModal}/>
                
                <h2 className="sex_header">Пол*</h2>
                <div className="radio-btn-container" >

                    <RadioButton 
                        changed={ this.radioChangeHandler } 
                        id="1" 
                        isSelected={ this.state.sex === "Male" } 
                        label="Мужской" 
                        value="Male" 
                    />

                    <RadioButton
                        changed={ this.radioChangeHandler } 
                        id="2" 
                        isSelected={ this.state.sex === "Female" } 
                        label="Женский" 
                        value="Female" 
                    />
                </div>
                <div className="github_header">
                <h2 className="h2_git">Github</h2>
                <Input label="Вставьте ссылку на Github*" onChange={ this.onGithubChange } value={this.state.githubUrl} placeholder="Вставьте ссылку на Github"/>
                <div className="privacy" >
                    <CheckBox onChange={ this.onPrivacyCheck} value={this.state.isPrivacyChecked}></CheckBox>
                    <div className="privacy_font">
                        <p>* Я согласен с <button type="button" onClick={ () => this.setPrivacyModal() } >политикой конфиденциальности</button></p>
                    </div>
                </div>
                </div>
                <div className="btn_send">
                <button type="submit" className=" btn btn-primary">Отправить</button>
                </div>
            </form>
            <div className="modal_display">
            <SuccessModal active={this.state.isModalActive} closeModal={this.closeModal} name={this.state.name}>          
            </SuccessModal>
            <PrivacyModal active={this.state.isPrivacyModalActive} closePrivacyModal={this.closePrivacyModal}>  
            </PrivacyModal>
            </div>
            </div>
        )
    }
    
}

export default ApplicantForm;
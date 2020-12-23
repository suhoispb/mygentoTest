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
        
        this.onDropZone=this.onDropZone.bind(this)
        this.deleteResume=this.deleteResume.bind(this)
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
    onDropZone (value) {
        this.setState({files:value})
    }
    onGithubChange (value) {
        this.setState({githubUrl:value})
    };
    radioChangeHandler = (event) => {

        this.setState({sex: event.target.value});
    };
    onPrivacyCheck = (event) => {
        this.setState(prevState => (
            {isPrivacyChecked:!prevState.isPrivacyChecked }));
    };
    // Самый лучший вариант сетСтейта, если есть зависит от предыдущего стейта

    onSubmit (event) {
        event.preventDefault()
        this.setState({isModalActive:true});
    };

    setPrivacyModal () {
        this.setState({isPrivacyModalActive:true});
    }

    closePrivacyModal () {
        this.setState({isPrivacyModalActive:false})
    }

    closeModal () {
        this.setState({
            name:'',
            surname:'',
            email:'',
            cv:'',
            sex:'',
            githubUrl:'',
            isPrivacyChecked:false,
            isModalActive:false,
            files:''
        })
    };

    deleteResume = () => {
        this.setState({files:[]});
      }

    
    render() {
        return(
            <div>
            <form className="applicationForm" onSubmit={this.onSubmit}>
                <h1 className="applicantionHeader">Анкета соискателя</h1>
                <div className="personalDataBlock">
                    <h2 className="personalDataHeader">Личные данные</h2>
                        <div className="personalDataContent">
                            <div className="nameSurname">
                                <Input required  
                                        name="firstName" 
                                        label="Имя*" 
                                        onChange={ this.onNameChange } 
                                        value={this.state.name} 
                                        placeholder="Имя"/>
                                <Input required  
                                        name="lastName" 
                                        label="Фамилия*" 
                                        onChange={ this.onSurnameChange } 
                                        value={this.state.surname} 
                                        placeholder="Фамилия"/>
                        </div>
                            <div className="mailAndDropzone">
                                <div className="mailZone">
                                    <Input required  
                                            name="email" 
                                            label="Электронная почта*" 
                                            onChange={ this.onEmailChange } 
                                            value={this.state.email} 
                                            type="email" 
                                            placeholder="Электронная почта"/>
                                </div>
                                    <FileInput onChange={this.onDropZone} 
                                               arrWithFiles={this.state.files}
                                               deleteResume={this.deleteResume}/>
                            </div>
                        </div>
                </div>


                <div className="sexBlock">
                    <h2 className="sexHeader">Пол*</h2>
                        <div className="radio-btn-container" >
                            <RadioButton 
                                name="sex"
                                required
                                changed={ this.radioChangeHandler } 
                                id="1" 
                                isSelected={ this.state.sex === "Male" } 
                                label="Мужской" 
                                value="Male" 
                            />
                            <RadioButton
                                name="sex"
                                changed={ this.radioChangeHandler } 
                                id="2" 
                                isSelected={ this.state.sex === "Female" } 
                                label="Женский" 
                                value="Female" 
                            />
                        </div>
                </div>

                <div className="githubBlock">
                    <h2 className="githubHeader">Github</h2>
                        <Input required  
                               name="githubUrl" 
                               label="Вставьте ссылку на Github*" 
                               onChange={ this.onGithubChange } 
                               value={this.state.githubUrl} 
                               placeholder="Вставьте ссылку на Github"/>
                </div>
    
                <div className="privacyBlock" >
                    <div className="checkBox">
                        <CheckBox required 
                                  onChange={ this.onPrivacyCheck} 
                                  value={this.state.isPrivacyChecked}/>
                    </div>
                        <div className="privacyText">
                            <p>* Я согласен с <button type="button" 
                                                      onClick={ () => this.setPrivacyModal() } >политикой конфиденциальности</button></p>
                        </div>
                </div>
                <div className="btnSend">
                    <button type="submit" className=" btn btn-primary">Отправить</button>
                </div>
            </form>

            <div className="modalDisplay">
                <SuccessModal active={this.state.isModalActive} 
                              closeModal={this.closeModal} 
                              name={this.state.name}>          
                </SuccessModal>
                <PrivacyModal active={this.state.isPrivacyModalActive} 
                              closeModal={this.closePrivacyModal}>  
                </PrivacyModal>
            </div>
            </div>
           
        )
    }
    
}

export default ApplicantForm;
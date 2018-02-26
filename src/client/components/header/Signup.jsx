import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {validate} from '../../utils/validation/index'


class RegisterModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      first_name : '',
      last_name : '',
      disabled: false,
      validate: validate
    };

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
  }

  firstNameChange(event){
    let value = event.target.value;
    let lastValue = value.charAt(value.length - 1);

    let testBool = validate.text(lastValue);
    if(testBool){
      this.setState({
        first_name : event.target.value,
        disabled: false,
      }); 
    }else{
      this.setState({
        disabled: true,
        id: 'error'
      });
    }
  }

  lastNameChange(event){
    let value = event.target.value;
    let lastValue = value.charAt(value.length - 1);

    let testBool = validate.text(lastValue);
    if(testBool){
      this.setState({
        last_name : event.target.value,
        disabled: false,
      }); 
    }else{
      this.setState({
        disabled: true,
        id: 'error'
      }); 
    }
  }


  render(){
    return (
      pug `
        #registerModal.modal.fade(tabIndex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
          .modal-dialog(role='document')
            .modal-content
              .modal-header
                h5#exampleModalLabel.modal-title Sign up to Access
                button.close(type='button', data-dismiss='modal', aria-label='Close')
                  span(aria-hidden='true') ×
              .modal-body
                form
                  .form-group
                    p.signup-text Sign up with your email address
                  .form-group.reg-fullname
                    input.form-control.reg-firstname(type='text', placeholder='First Name' value=${this.state.first_name} onChange=${this.firstNameChange} id=${(this.state.disabled) ? "error" : ""})
                    label(id=${(this.state.disabled) ? "error-text" : ""}) testing

                    input.form-control.reg-lastname(type='text', placeholder='Last Name' value=${this.state.last_name} onChange=${this.lastNameChange} id=${(this.state.disabled) ? "error" : ""})
                  .form-group
                    input.form-control(type='email', placeholder='Email Address')
                  .form-group
                    input.form-control(type='password', placeholder='Password')
                  .form-group
                    input.form-control(type='password', placeholder='Confirm Password')
                  .form-group.reg-countries
                    select.form-control.reg-homeland
                      option Select Country
                      option Indonesia 
                      option Malaysia
                      option Singapura
                      option Australia
                    select.form-control.reg-country
                      option Select Country
                      option United Kingdom
                      option Netherlands
                      option Italy
                      option France
                  .form-group
                    input.form-control(type='date')
                  .form-group
                    label.custom-control.custom-checkbox
                      input.custom-control-input(type='checkbox')
                      span.custom-control-indicator
                      span.custom-control-description SIGN UP FOR NEWSLETTER
                  .form-group
                    p.agreement By Signing up, I agree to Oprent's Term of Service, Privacy Policy and Cookies
                  .form-group
                    button.btn.btn-dark.btn-block(type='button') SIGN UP 
              .modal-footer
                .footer-text Have an account ? Logn in
      `
    )
  }

};

export default RegisterModal;
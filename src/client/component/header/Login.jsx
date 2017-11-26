import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const LoginModal = () => (
  pug `
    #loginModal.modal.fade(tabIndex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            h5#exampleModalLabel.modal-title Log in to Oprent
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            form
              .form-group
                p.login-text Log in with your email address
              .form-group
                input.form-control(type='text', placeholder='Email Address')
              .form-group
                input.form-control(type='password', placeholder='Password')
              .form-group
                p.forgot-password Forgot Password ?
              .form-group
                button.btn.btn-dark.btn-block(type='button') LOG IN
          .modal-footer
            .footer-text Don't have an account ? Sign Up
  `
);

export default LoginModal;
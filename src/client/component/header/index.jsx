import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import LoginModal from './Login.jsx';
import RegisterModal from './Signup.jsx';
import './css/Topbar.css';

class HeaderWrapper extends Component {
  render(){
    return pug `
      .container-fluid
        LoginModal
        RegisterModal
        .fixed-top
          .topbar
            .row
              .logo
              .auth-box
                .sign-in(data-toggle='modal', data-target='#loginModal')
                  | SIGN IN
                .sign-up(data-toggle='modal', data-target='#registerModal')
                  | SIGN UP
          nav.navbar.navbar-expand-lg.navbar-light
            button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav', aria-controls='navbarNav', aria-expanded='false', aria-label='Toggle navigation')
              span.navbar-toggler-icon
            .mobile-logo
            #navbarNav.collapse.navbar-collapse
                ul.navbar-nav
                  li.nav-item.register-mobile
                    .nav-link(data-toggle='modal', data-target='#registerModal') SIGN UP
                  li.nav-item.login-mobile
                    .nav-link(data-toggle='modal', data-target='#loginModal') SIGN IN
                  li.nav-item.aboutus
                    Link.nav-link(to="/about-us")
                      | ABOUT US
                      span.sr-only (current)
                  li.nav-item
                    Link.nav-link(to="/whats-new") WHAT'S NEW
                  li.nav-item
                    Link.nav-link(to="/designers") DESIGNERS
                  li.nav-item
                    Link.nav-link(to='/rent-designer-women-fashion') CLOTHING
                  li.nav-item
                    Link.nav-link(to='/rent-designer-women-bag') ACCESSORIES
                  li.nav-item
                    Link.nav-link(to='/how-it-works-rent') HOW IT WORKS
                  li.nav-item
                    Link.nav-link(to='/magazine') MAGAZINE  
                .search-box
                  i.fa.fa-search(aria-hidden='true')


        = renderRoutes(this.props.route.routes)
    `
  }
}

export default HeaderWrapper;
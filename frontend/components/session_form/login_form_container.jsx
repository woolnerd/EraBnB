import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, loginDemoUser } from '../../actions/session_actions';
import { openModal, closeModal  } from '../../actions/modal_actions'; 
import LoginForm from './login_form';


const mSTP = ({ errors }) => ({
    errors,
    formType: 'login',
});




const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: signup => dispatch(openModal(signup)),
    loginDemoUser: () => dispatch(loginDemoUser()),
});

export default connect(mSTP, mDTP)(LoginForm);
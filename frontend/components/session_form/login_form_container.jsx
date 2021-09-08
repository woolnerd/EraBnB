import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';


const mSTP = ({ errors }) => ({
    //maybe add session to error? 
    errors,
    formType: 'login',
    // navLink: <Link to="/">sign up</Link>,
});




const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: signup => dispatch(openModal(signup)),
    loginDemoUser: () => dispatch(login()),
});

export default connect(mSTP, mDTP)(LoginForm);
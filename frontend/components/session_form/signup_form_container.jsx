import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, loginDemoUser } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SignupForm from './signup_form';


const mSTP = ({ errors }) => ({
    errors,
    formType: 'signup',
    navLink: <Link to="/login">log in</Link>
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    loginDemoUser: () => dispatch(loginDemoUser()),
});

export default connect(mSTP, mDTP)(SignupForm);
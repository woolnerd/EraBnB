import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mSTP = ({ errors }) => ({
    errors,
    formType: 'signup',
    navLink: <Link to="/login">log in</Link>
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignupForm);
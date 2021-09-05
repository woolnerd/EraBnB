import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ error }) => ({
    //maybe add session to error? 
    error,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);
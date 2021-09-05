import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className='menu-btn'></div>
        )
    }
}


export default Menu;
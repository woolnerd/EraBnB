import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import { AuthRoute } from '../../util/route_util';



class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className='menu-btn'>
                <h4>Menu</h4>
                <div className="menu-dropdown">
                    <Link to='/'>Login</Link>
                    <Link to='/'>Signup</Link>
                    {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
                </div>
            </div>
        )
    }
}


export default Menu;
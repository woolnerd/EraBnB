import React from "react";
import { Link } from 'react-router-dom'

class Users extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        const {currentUser} = this.props;
        return (
            <div>
                <h1>Hello, {currentUser.first_name}!</h1>
                 <h2>Email: {currentUser.email}</h2>
                 <h3>Bio: {currentUser.bio}</h3>
                 <Link to="/listing/new/"><h3>Create a New Listing</h3></Link>
            </div>

        )
    }
}

export default Users;
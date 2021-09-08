import React from "react";


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
            </div>
        )
    }
}

export default Users;
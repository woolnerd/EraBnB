import { connect } from 'react-redux';
import Users from './users';


//add listings, and bookings here eventually
const mSTP = ({entities, session}) => {
        return {
            currentUser: entities.users[session.id],  
        }
};

const mDTP = dispatch => ({

});




export default connect(mSTP, mDTP)(Users);

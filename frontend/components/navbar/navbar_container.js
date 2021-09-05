import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = ({entities, session}) => ({
    // currentUser: users[session.id]
    currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);
import { connect } from 'react-redux';
import Menu from './menu';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout, loginDemoUser } from '../../actions/session_actions';


const mSTP = ({entities, session}) => {
        return {
            currentUser: entities.users[session.id],
            demoUser: entities.users[1],
        }
        
    
};

const mDTP = dispatch => ({
    signUp: () => dispatch(openModal('signup')),
    login: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
    loginDemoUser: () => dispatch(loginDemoUser()),
});




export default connect(mSTP, mDTP)(Menu);

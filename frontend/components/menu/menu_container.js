import { connect } from 'react-redux';
import Menu from './menu';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';


const mSTP = ({entities, session}) => {
        // debugger; 
        return {
            currentUser: entities.users[session.id],
            
        }
        
    
};

const mDTP = dispatch => ({
    signUp: () => dispatch(openModal('signup')),
    login: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
});




export default connect(mSTP, mDTP)(Menu);

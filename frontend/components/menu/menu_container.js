import { connect } from 'react-redux';
import Menu from './menu';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = state => ({
    
});

const mDTP = dispatch => ({
    signUp: () => dispatch(openModal('signup')),
    login: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
});




export default connect(mSTP, mDTP)(Menu);

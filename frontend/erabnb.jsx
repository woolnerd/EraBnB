import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout} from './actions/session_actions'
import * as listingActions from './actions/listing_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //testing
    window.store = store;
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    window.listingActions = listingActions;

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, root)
})

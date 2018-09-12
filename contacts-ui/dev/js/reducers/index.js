import { combineReducers } from 'redux';
import ContactReducer from './reducer-contacts';
import { reducer as reduxFormReducer } from 'redux-form';
import ActiveContactReducer from './reducer-active-contact';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    contacts: ContactReducer,
    activeContact: ActiveContactReducer,
    form: reduxFormReducer
});

export default allReducers

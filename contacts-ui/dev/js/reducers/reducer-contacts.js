import { loadContacts } from '../actions';

const initialState = {
    contacts: [],
    activeContact: {},
    error: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CONTACT': 
            return Object.assign({}, state, {
                activeContact: action.payload
            })
            break;
        case 'LOAD_CONTACTS_SUCCESS':
            return Object.assign({}, state, {
                contacts: [
                    ...action.payload
                ]
            })
            break;
        case 'LOAD_CONTACTS_FAILURE':
            return Object.assign({}, state, {
                error: action.payload
            });
            break;
        case 'INSERT_CONTACTS_SUCCESS':
            return Object.assign({}, state, {
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            });
            break;
        case 'INSERT_CONTACTS_FAILURE':
            return state;
            break;
        case 'UPDATE_CONTACTS_FAILURE':
            return state;
            break;
        default:
            return state;
    }
}


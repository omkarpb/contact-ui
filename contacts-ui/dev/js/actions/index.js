var axios = require('axios');
const URL = 'http://localhost:4000/contacts/';

export const selectContact = (contact) => {
    return {
        type: 'SELECT_CONTACT',
        payload: contact
    }
}

const loadContactsSuccess = (data) => {
    return ({
        type: 'LOAD_CONTACTS_SUCCESS',
        payload: data
    });
}

const loadContactsFailure = (error) => {
    return {
        type: 'LOAD_CONTACTS_FAILURE',
        payload: error
    }
}

export const loadContacts = () => {
    return (dispatch) => {
        axios.get(URL)
            .then((response) => {
                dispatch(loadContactsSuccess(response.data))
            }).catch((error) => {
                console.log(error);
                dispatch(loadContactsFailure(error))
            })
    }
};

const insertContactsSuccess = (data) => {
    return ({
        type: 'INSERT_CONTACTS_SUCCESS',
        payload: data
    });
}

const insertContactsFailure = (error) => {
    return {
        type: 'INSERT_CONTACTS_FAILURE',
        payload: error
    }
}

export const insertContact = (contact) => {
    return (dispatch) => {
        axios.post(URL, contact)
            .then((response) => {
                dispatch(insertContactsSuccess(response.data))
            }).catch((error) => {
                dispatch(insertContactsFailure(error))
            })
    }
};

const updateContactsFailure = (error) => {
    return {
        type: 'UPDATE_CONTACTS_FAILURE',
        payload: error
    }
}

export const updateContact = (contact) => {
    return (dispatch) => {
        axios.put(`${URL}`, contact)
        .then((response) => {
            dispatch(loadContacts())
        }).catch((err) => {
            dispatch(updateContactsFailure(error))
        })
    }
};

export const deleteContact = (contact) => {
    return (dispatch) => {
        axios.delete(`${URL}${contact.id}`)
        .then((response) => {
            dispatch(loadContacts())
        }).catch((err) => {
            dispatch(updateContactsFailure(error))
        })
    }
};


// export const loadContacts = () => {
//     return (dispatch) => {
//       dispatch(loadContactsStarted());

//       axios
//         .get(URL)
//         .then(res => {
//           dispatch(loadContactsSuccess(res.data));
//         })
//         .catch(err => {
//           dispatch(loadContactsFailure(err.message));
//         });
//     };
//   };

// const loadContactsSuccess = contacts => ({
//     type: 'LOAD_CONTACTS_SUCCESS',
//     payload: {
//       contacts
//     }
//   });

// const loadContactsStarted = () => ({
//     type: 'LOAD_CONTACTS_STARTED'
//   });

// const loadContactsFailure = error => ({
//     type: 'LOAD_CONTACTS_FAILURE',
//     payload: {
//       error
//     }
//   });
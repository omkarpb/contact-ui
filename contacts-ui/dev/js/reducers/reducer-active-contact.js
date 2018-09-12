export default function (state = null, action) {
    switch (action.type) {
        case 'SELECT_CONTACT':
            return action.payload;
            break;
    }
    return state;
}
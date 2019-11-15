const INITIAL_STATE = {
    description: 'Read book',
    list: [{
        _id: 1,
        description: 'Pay credit card',
        done: true
    }, {
        _id: 2,
        description: 'Meeting with squad',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}

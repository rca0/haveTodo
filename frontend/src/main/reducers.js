import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer

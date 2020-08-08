import { combineReducers } from 'redux'
import redpropsReducer from './redprops'
import layoutReducer from './layout'

const appReducer = combineReducers({
    redprops: redpropsReducer,
    layout: layoutReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer

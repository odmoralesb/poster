import { combineReducers } from 'redux'
import redpropsReducer from './redprops'
import layoutReducer from './layout'
import autorizacionReducer from './autorizacion'

const appReducer = combineReducers({
    redprops: redpropsReducer,
    layout: layoutReducer,
    autorizacion: autorizacionReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer

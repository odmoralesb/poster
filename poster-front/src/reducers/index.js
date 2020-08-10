import { combineReducers } from 'redux'
import redpropsReducer from './redprops'
import layoutReducer from './layout'
import autorizacionReducer from './autorizacion'
import registroReducer from './registro'

const appReducer = combineReducers({
    redprops: redpropsReducer,
    layout: layoutReducer,
    autorizacion: autorizacionReducer,
    registro: registroReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'CERRAR_SESION' || action.type === 'INICIAR_SESION') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer

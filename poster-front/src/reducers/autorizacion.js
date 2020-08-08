import * as types from '../actions/types'
import Immutable from 'immutable'

const INITIAL_STATE = Immutable.fromJS({
    username: null,
    password: null,
    autenticacion: false,

})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CERRAR_SESION:
            state = state.set('autenticacion', false)
            return state
        default:
            return state
    }
}
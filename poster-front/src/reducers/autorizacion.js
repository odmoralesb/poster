import * as types from '../actions/types'
import Immutable from 'immutable'

const INITIAL_STATE = Immutable.fromJS({
    alias: null,
    password: null,
    autenticacion: false,
    usuario: null

})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case types.INICIAR_SESION:
            state = state.set('autenticacion', true)
            return state
        case types.ASIGNAR_USUARIO_SESION:
            state = state.set('usuario', Immutable.fromJS(action.payload.usuario))
            return state
        case types.CERRAR_SESION:
            state = state.set('autenticacion', false)
            return state
        case types.MODIFICAR_INPUTS_CREDENCIALES:
            state = state.set(action.payload.attr, action.payload.value)
            return state

        default:
            return state
    }
}
import * as types from '../actions/types'
import Immutable from 'immutable'


import {
    isPrimitive,
} from '../utils/helpers'

const INITIAL_STATE = Immutable.fromJS({
    datos: {
        nombres: null,
        apellidos: null,
        alias: null,
        email: null,
        password: null,
        confirmacion_password: null
    }
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        

        case types.MODIFICAR_INPUTS_REGISTRO:

            if (isPrimitive(action.payload.value)) {
                state = state.setIn(`${action.payload.path}`.split('.'), action.payload.value)
            } else {
                if (action.payload.immutable === false) {
                    state = state.setIn(`${action.payload.path}`.split('.'), action.payload.value)
                } else {
                    state = state.setIn(`${action.payload.path}`.split('.'), Immutable.fromJS(action.payload.value))
                }
            }

            return state

        default:
            return state
    }
}
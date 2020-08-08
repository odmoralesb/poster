import * as types from '../actions/types'
import Immutable from 'immutable'


const INITIAL_STATE = Immutable.fromJS({
    valor: null,
    tipo: null
})



export default function (state = INITIAL_STATE, action) {


    switch (action.type) {


        case types.MODIFICAR_INPUTS:
            state = state.setIn(`${action.payload.path}`.split('.'), Immutable.fromJS(action.payload.value))
            return state

        case types.MOSTRAR_TIPO:

            
            const valor = state.get('valor')
            const aNumero = Number(valor)

            let tipo;

            if (!isNaN(aNumero)) {
                tipo = typeof aNumero
            } else {
                tipo = typeof valor
            }

            state = state.set('tipo', tipo)


            return state


        default:
            return state



    }
}
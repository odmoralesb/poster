import { API_URL } from '.'

import { createAxiosInstance } from '../utils/helpers'

import * as types from './types'

import { mostrarMensaje } from './layout'

export function updateInputs(path, value) {
	return (dispatch) => {
		dispatch({ 
			type: types.MODIFICAR_INPUTS, 
			payload: { 
				path, 
				value: (value == '') ? null : value 
			} 
		})
	}
}


export function mostrarTipo() {
	return (dispatch, getState) => {

        dispatch({ type: types.MOSTRAR_TIPO })        
        const tipo = getState().redprops.get('tipo')

        
        mostrarMensaje(dispatch, {tipo: 'info', descripcion: 'El tipo es ' + tipo})

        
		
	}
}



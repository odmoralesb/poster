import { API_URL } from './index'
import { createAxiosInstance } from '../utils/helpers'
import * as types from './types'
import history from '../utils/history'


import { mostrarMensaje } from './layout'


export function modificarInputs(attr, value) {
    return (dispatch) => {
        dispatch({ type: types.MODIFICAR_INPUTS_CREDENCIALES, payload: { attr, value } })
    }
}

export function signIn(credenciales) {

    const axios = createAxiosInstance()

    return function (dispatch) {

        axios
            .post(`${API_URL}/usuarios/login`, credenciales)
            .then((res) => {    
                dispatch({ type: types.INICIAR_SESION, payload: {usuario: res.data.usuario} })
                history.push(window.FOLDER + '/')
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    mostrarMensaje(dispatch, {tipo: 'danger', error: 'Nombre de usuario o contraseña incorrectas' })
                } else {
                    mostrarMensaje(dispatch, err)
                }
            })
    }
}



export function sesion() {
    const axios = createAxiosInstance()
    return function (dispatch) {
        axios
        .get(`${API_URL}/usuarios/sesion`)
        .then((res) => { 
            console.log("# res.data.usuario: ", res.data.usuario)   
            dispatch({ type: types.INICIAR_SESION, payload: {usuario: res.data.usuario} })
            history.push(window.FOLDER + '/')
        })
        .catch((err) => {
            mostrarMensaje(dispatch, err)
        })


    }
}




export function signOut() {
    return function (dispatch) {
        dispatch({ type: types.CERRAR_SESION })
        history.push(window.FOLDER + '/signin')
    }
}




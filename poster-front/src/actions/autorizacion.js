import * as types from './types'
import history from '../utils/history'


export function signOut() {

    return function (dispatch) {
        dispatch({ type: types.CERRAR_SESION })
        history.push(window.FOLDER + '/signin')
    }


}
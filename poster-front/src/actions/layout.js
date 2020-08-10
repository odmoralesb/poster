import * as types from './types'


export function mostrarMensaje(dispatch, msg) {
    let obj = { type: 'warning', descripcion: '' }
    let descripcion = ''
    if (msg.response) {
        switch(msg.response.status) {
            case 500:
                descripcion = (msg.response.data.ExceptionMessage) ? msg.response.data.ExceptionMessage : msg.response.data.Message
                descripcion = descripcion ? descripcion : msg.response.data
                console.log('Error en el Servidor: ', descripcion)
                dispatch({type: types.MOSTRAR_MENSAJE, payload: { tipo: 'danger', descripcion: 'Error en el Servidor'}})
                break;
            case 401:
                dispatch({ type: types.MOSTRAR_MENSAJE, payload: { tipo: 'danger', descripcion: 'No está autorizado para proceder con esta solicitud. Por favor, inicie sesión y vuelva a intentarlo' } })
                break;
            case 422: 
                if (msg.response.data.message) {
                    dispatch({ type: types.MOSTRAR_MENSAJE, payload: { tipo: 'warning', descripcion: msg.response.data.message }})
                }
                if (msg.response.data.errors) {
                    const errors = Object.values(msg.response.data.errors).map(e => e[0])
                    errors.forEach(e => {
                        dispatch({ type: types.MOSTRAR_MENSAJE, payload: { tipo: 'warning', descripcion: e }})                        
                    });
                }
                break;
            case 405:
                if (msg.response.data.message) {
                    dispatch({type: types.MOSTRAR_MENSAJE, payload: { tipo: 'danger', descripcion: msg.response.data.message }})
                }
                break;
            case 403:
                dispatch({type: types.MOSTRAR_MENSAJE, payload: { tipo: 'danger', descripcion: 'Acceso Denegado' }})
                break;
            default:

        }
    } else {
        if (msg.data) {
            obj.descripcion = msg.data.Message
            dispatch({ type: types.MOSTRAR_MENSAJE, payload: obj })
        } else if (msg.error) {
            obj.tipo= 'danger'
            obj.descripcion = msg.error
            dispatch({ type: types.MOSTRAR_MENSAJE, payload: obj })
        } else if (msg.info) {
            obj.tipo= 'info'
            obj.descripcion = msg.info
            dispatch({ type: types.MOSTRAR_MENSAJE, payload: obj })
        } else if (msg.success) {
            obj.tipo= 'success'
            obj.descripcion = msg.success
            dispatch({ type: types.MOSTRAR_MENSAJE, payload: obj })
        } else if (msg.warning) {
            if (msg.warning instanceof Array) {
                for (let n = 0; n < msg.warning.length; n++) {
                    const payload = { tipo: 'warning', descripcion: msg.warning[n] }
                    const fn = (d) => d({ type: types.MOSTRAR_MENSAJE, payload })
                    fn(dispatch)
                }
            } else {
                obj.tipo= 'warning'
                obj.descripcion = msg.warning
                dispatch({ type: types.MOSTRAR_MENSAJE, payload: obj })
            }
        } else {
            obj.tipo= 'danger'
            obj.descripcion = msg
            dispatch({ type: types.MOSTRAR_MENSAJE, payload: obj })
        }
    }
}



export function limpiarMensaje() {
    return (dispatch) => {
        dispatch({ type: types.LIMPIAR_MENSAJE })
    }
}
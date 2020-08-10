// Dependencias
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Cookies from 'universal-cookie'


// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css'
import './css/custom-toastify.css'
import './css/layout.css'
import './css/font-awesome.min.css'

// Utilis
import history from './utils/history'
import store from './utils/store'

// Types
import { INICIAR_SESION, CERRAR_SESION, ASIGNAR_USUARIO_SESION } from './actions/types'

// Acciones
import { sesion } from './actions/autorizacion'


//
import routes from './routes'



const cookies = new Cookies()
const autenticacion = Boolean(cookies.get('autenticacion'))


if (autenticacion) {
    store.dispatch({ type: INICIAR_SESION })
    sesion().then(data => {
        store.dispatch({ type: ASIGNAR_USUARIO_SESION, payload: data.usuario })
    }).catch(err => {
        console.log(err)
        store.dispatch({ type: CERRAR_SESION })
        history.push(window.FOLDER + '/signin')
    })
}

window.root = window.document.getElementById('root')

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history} >
                { routes }
            </Router>
            <ToastContainer toastClassName="toastify" />
        </div>
    </Provider>,
    window.root
)

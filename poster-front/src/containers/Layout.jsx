import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import { signOut } from '../actions/autorizacion'

import { 
    limpiarMensaje
} from '../actions/layout'




class Layout extends Component {


    UNSAFE_componentWillMount() {
        if (!this.props.autenticacion) {
            this.props.signOut()
        }
    }



    UNSAFE_componentDidUpdate() {
        this.props.limpiarMensaje()
    }



	render() {

        const { mensaje, usuario } = this.props

        if (mensaje) {

            switch (mensaje.get('tipo')) {
                case 'danger':
                    toast.error(mensaje.get('descripcion'), { bodyClassName: 'toastify-content toastify-danger' })
                    break
                case 'warning':
                    toast.warn(mensaje.get('descripcion'), { bodyClassName: 'toastify-content toastify-warning' })
                    break
                case 'success':
                    toast.success(mensaje.get('descripcion'), { bodyClassName: 'toastify-content toastify-success' })
                    break
                default:
                    toast.info(mensaje.get('descripcion'), { bodyClassName: 'toastify-content toastify-info' })
            }
            
        }

		return (
            <div>
                <div className="titulo">Plantilla Basica de ReactJS</div>
                <div className="contenido">
                    { this.props.children }
                </div>
            </div>
		)
	}
}

function mapStateToProps(state) {
    return {
        mensaje: state.layout.get('mensaje'),
        autenticacion: state.autorizacion.get('autenticacion'),
        usuario: state.autorizacion.get('usuario'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        limpiarMensaje: () => dispatch(limpiarMensaje()),
        signOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
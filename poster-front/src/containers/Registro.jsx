import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import '../css/signin.css'

import {
    Card
} from 'react-bootstrap'


import {
    limpiarMensaje
} from '../actions/layout'



import {
    modificarInputs,
    registrar
} from '../actions/registro'


class Registro extends Component {


    componentDidUpdate() {
        this.props.limpiarMensaje()
    }


	render() {

        const { datos, mensaje } = this.props

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

            <div className="container-signin">

                <div className="row">
                    <div className="col-md-12" style={{ paddingTop: '120px' }}>

                        <Card>
                            <Card.Body>

                                <div className="container-form-signin">

                                    <form onSubmit={ e => { e.preventDefault(); this.props.registrar(datos) }}>


                                        <div className="form-group">
                                            <label htmlFor="nombres">Nombres</label>
                                            <input className="form-control" id="nombres" aria-describedby="nombresHelp" value={ datos.get('nombres') || '' } onChange={ e => this.props.modificarInputs('datos.nombres', e.target.value) } />
                                            <small id="nombresHelp" className="form-text text-muted">Ingresa tu nombre</small>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="apellido">Apellidos</label>
                                            <input className="form-control" id="apellido" aria-describedby="apellidoHelp" value={ datos.get('apellidos') || '' } onChange={ e => this.props.modificarInputs('datos.apellidos', e.target.value) } />
                                            <small id="apellidoHelp" className="form-text text-muted">Ingresa tu apellido</small>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="alias">Alias</label>
                                            <input className="form-control" id="alias" aria-describedby="aliasHelp" value={ datos.get('alias') || '' } onChange={ e => this.props.modificarInputs('datos.alias', e.target.value) } />
                                            <small id="aliasHelp" className="form-text text-muted">Ingresa tu usuario de sesion</small>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input className="form-control" id="email" aria-describedby="emailHelp" value={ datos.get('email')  || '' } onChange={ e => this.props.modificarInputs('datos.email', e.target.value) } />
                                            <small id="emailHelp" className="form-text text-muted">Ingresa tu email</small>
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password"  value={ datos.get('password') || '' } onChange={ e => this.props.modificarInputs('datos.password', e.target.value) }  />
                                            <small id="passwordnHelp" className="form-text text-muted">Ingresa tu password</small>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirmacion">Confirmar Password</label>
                                            <input type="password" className="form-control" id="confirmacion"  value={ datos.get('confirmacion_password')  || '' } onChange={ e => this.props.modificarInputs('datos.confirmacion_password', e.target.value) }  />
                                            <small id="confirmacionHelp" className="form-text text-muted">Confirma tu password</small>
                                        </div>


                                        <button type="submit" className="btn btn-primary">Registrarse</button>


                                    </form> 

                                </div>

                            </Card.Body>
                        </Card>

                    </div>
                </div>
                
            </div>

		)
	}
}

function mapStateToProps(state) {
    return {
        datos: state.registro.get('datos'),
        mensaje: state.layout.get('mensaje'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registrar: (datos) => dispatch(registrar(datos)),
        modificarInputs: (path, value) => dispatch(modificarInputs(path, value)), 
        limpiarMensaje: () => dispatch(limpiarMensaje()),       
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Registro)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../css/signin.css'

import {
    Card
} from 'react-bootstrap';




class SignIn extends Component {


	render() {
        
		return (

            <div className="container-login">

                <div className="row">
                    <div className="col-md-12">

                        <Card>
                            <Card.Body>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="alias">Alias</label>
                                        <input type="email" className="form-control" id="alias" aria-describedby="aliasHelp" />
                                        <small id="aliasHelp" className="form-text text-muted">Ingresa tu usuario de sesion</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Ingresar</button>
                                </form> 
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

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Card
} from 'react-bootstrap';

import { 
    updateInputs,
    mostrarTipo
} from '../actions/redprops'



class Contenido extends Component {


	render() {

        const { redprops } = this.props
        
		return (
            <div> 

               <div className="row">

                   <div className="col-md-12">

                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Valor</span>
                                            </div>
                                            <input 
                                                className="form-control" 
                                                placeholder="Introduzca un valor" 
                                                value={redprops.get('valor')||''}
                                                onChange={(e) => this.props.updateInputs('valor', e.target.value) }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button 
                                            type="button" 
                                            className="btn btn-primary font-btn" 
                                            style={{width:'100%'}}
                                            onClick={() => this.props.mostrarTipo() }
                                        >
                                                Aceptar
                                        </button>
                                    </div>
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
        redprops: state.redprops
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateInputs: (path, value) => dispatch(updateInputs(path, value)),
        mostrarTipo: () => dispatch(mostrarTipo())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contenido)
import React, { Component } from 'react'
import { connect } from 'react-redux'



import { signOut } from '../actions/autorizacion'




export default function (ComposedComponent) {
    class Autorizacion extends Component {


        UNSAFE_componentWillMount() {
            if (!this.props.autenticacion) {
                this.props.signOut()
            } 
        }

        UNSAFE_componentWillUpdate(nextProps) {
            if (!nextProps.autenticacion) {
                this.props.signOut()
            }
        }


        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            autenticacion: state.autorizacion.get('autenticacion'),
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(signOut()),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Autorizacion)
}

import React, { Component } from 'react'
import { connect } from 'react-redux'



import { signOut, sesion } from '../actions/autorizacion'




export default function (ComposedComponent) {
    class Autorizacion extends Component {


        // UNSAFE_componentWillMount() {
        //     if (!this.props.usuario) {
        //         this.props.signOut()
        //     } 
        // }

        // UNSAFE_componentWillUpdate(nextProps) {
        //     if (!nextProps.usuario) {
        //         this.props.signOut()
        //     }
        // }

        UNSAFE_componentWillMount() {
            //this.props.sesion()
            console.log("# usuario: ", this.props.usuario)
            if (!this.props.usuario) {
                this.props.signOut()
            } 
        }

        UNSAFE_componentWillUpdate(nextProps) {
            console.log("# usuario: ", this.props.usuario)
            if (!nextProps.usuario) {
                this.props.signOut()
            }
        }


        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            usuario: state.autorizacion.get('usuario'),
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(signOut()),
            sesion: () => dispatch(sesion()),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Autorizacion)
}

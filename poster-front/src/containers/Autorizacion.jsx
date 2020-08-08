import React, { Component } from 'react'
import { connect } from 'react-redux'


import { signOut } from '../actions/autorizacion'


export default function (ComposedComponent) {
    class Autorizacion extends Component {


        UNSAFE_componentWillMount() {
            const url = this.props.match.path
            console.log(url)
            if (!this.props.user) {
                this.props.signOut()
            } 
        }

        UNSAFE_componentWillUpdate(nextProps) {
            const url = this.props.match.path
            console.log(url)
            if (!nextProps.user) {
                this.props.signOut()
            }
        }

        render() {

            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            //user: state.common.get('user'),
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(signOut()),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Autorizacion)
}

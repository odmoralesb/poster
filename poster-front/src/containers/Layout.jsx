import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { signOut, sesion } from "../actions/autorizacion";

import { limpiarMensaje } from "../actions/layout";

class Layout extends Component {
  UNSAFE_componentWillMount() {
    if (!this.props.autenticacion) {
      this.props.signOut();
    } else {
      this.props.sesion();
    }
  }

  UNSAFE_componentDidUpdate() {
    this.props.limpiarMensaje();
  }

  render() {
    const { mensaje, usuario } = this.props;

    const alias = usuario ? usuario.get("alias") : "";

    if (mensaje) {
      switch (mensaje.get("tipo")) {
        case "danger":
          toast.error(mensaje.get("descripcion"), {
            bodyClassName: "toastify-content toastify-danger",
          });
          break;
        case "warning":
          toast.warn(mensaje.get("descripcion"), {
            bodyClassName: "toastify-content toastify-warning",
          });
          break;
        case "success":
          toast.success(mensaje.get("descripcion"), {
            bodyClassName: "toastify-content toastify-success",
          });
          break;
        default:
          toast.info(mensaje.get("descripcion"), {
            bodyClassName: "toastify-content toastify-info",
          });
      }
    }

    return (
      <div>
        <div className="head">
          <span className="pull-left">Plantilla Basica de ReactJS</span>
          <span className="pull-right">{alias}</span>
        </div>
        <nav className="navegacion">
          <ul className="menu">
            <li>Posts</li>
            <li>Publicaciones</li>
          </ul>
        </nav>
        <div className="contenido">{this.props.children}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mensaje: state.layout.get("mensaje"),
    usuario: state.autorizacion.get("usuario"),
    autenticacion: state.autorizacion.get("autenticacion"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    limpiarMensaje: () => dispatch(limpiarMensaje()),
    signOut: () => dispatch(signOut()),
    sesion: () => dispatch(sesion()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

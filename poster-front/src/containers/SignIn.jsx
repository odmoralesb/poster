import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import "../css/signin.css";

import { Card } from "react-bootstrap";

import { limpiarMensaje } from "../actions/layout";

import { modificarInputs, signIn } from "../actions/autorizacion";

class SignIn extends Component {
  componentDidUpdate() {
    this.props.limpiarMensaje();
  }

  render() {
    const { alias, password, mensaje } = this.props;

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
      <div className="container-login">
        <div className="row">
          <div className="col-md-12">
            <Card>
              <Card.Body>
                <div className="container-form-login">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.props.signIn({
                        alias: this.props.alias,
                        password: this.props.password,
                      });
                    }}
                  >
                    <div className="form-group">
                      <label htmlFor="alias">Alias</label>
                      <input
                        className="form-control"
                        id="alias"
                        aria-describedby="aliasHelp"
                        value={alias || ""}
                        onChange={(e) =>
                          this.props.modificarInputs("alias", e.target.value)
                        }
                      />
                      <small id="aliasHelp" className="form-text text-muted">
                        Ingresa tu usuario de sesion
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password || ""}
                        onChange={(e) =>
                          this.props.modificarInputs("password", e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <a href="/registro">Registro</a>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Ingresar
                    </button>
                  </form>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    alias: state.autorizacion.get("alias"),
    password: state.autorizacion.get("password"),
    mensaje: state.layout.get("mensaje"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    modificarInputs: (attr, value) => dispatch(modificarInputs(attr, value)),
    limpiarMensaje: () => dispatch(limpiarMensaje()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

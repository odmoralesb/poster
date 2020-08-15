import { API_URL } from "./index";
import { createAxiosInstance } from "../utils/helpers";
import * as types from "./types";
import history from "../utils/history";
import Cookies from "universal-cookie";

import { mostrarMensaje } from "./layout";

const cookies = new Cookies();

export function modificarInputs(attr, value) {
  return (dispatch) => {
    dispatch({
      type: types.MODIFICAR_INPUTS_CREDENCIALES,
      payload: { attr, value },
    });
  };
}

export function signIn(credenciales) {
  const axios = createAxiosInstance();

  return function (dispatch) {
    axios
      .post(`${API_URL}/usuarios/login`, credenciales)
      .then((res) => {
        cookies.set("autenticacion", true, { path: "/" });
        cookies.set("alias", res.data.usuario.alias, { path: "/" });
        dispatch({ type: types.INICIAR_SESION });
        history.push(window.FOLDER + "/");
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          mostrarMensaje(dispatch, {
            tipo: "danger",
            error: "Nombre de usuario o contraseña incorrectas",
          });
        } else {
          mostrarMensaje(dispatch, err);
        }
      });
  };
}

export function signOut() {
  return function (dispatch) {
    dispatch({ type: types.CERRAR_SESION });
    history.push(window.FOLDER + "/signin");
  };
}

export function sesion() {
  const axios = createAxiosInstance();
  const alias = cookies.get("alias");
  return function (dispatch) {
    axios
      .get(`${API_URL}/usuarios/sesion/${alias}`)
      .then((res) => {
        dispatch({
          type: types.ASIGNAR_USUARIO_SESION,
          payload: res.data.usuario,
        });
      })
      .catch((err) => {
        mostrarMensaje(dispatch, err);
      });
  };
}

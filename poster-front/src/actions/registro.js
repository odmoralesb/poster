import { API_URL } from "./index";
import { createAxiosInstance } from "../utils/helpers";
import * as types from "./types";
import history from "../utils/history";
import Cookies from "universal-cookie";

import { mostrarMensaje } from "./layout";
import { sesion } from "./autorizacion";

const cookies = new Cookies();

export function modificarInputs(path, value, immutable = true) {
  return (dispatch) => {
    dispatch({
      type: types.MODIFICAR_INPUTS_REGISTRO,
      payload: { path, value, immutable },
    });
  };
}

export function registrar(datos) {
  const axios = createAxiosInstance();

  return function (dispatch) {
    axios
      .post(`${API_URL}/usuarios/crear`, datos)
      .then((res) => {
        cookies.set("autenticacion", true, { path: "/" });
        cookies.set("alias", res.data.usuario.alias, { path: "/" });
        dispatch({ type: types.INICIAR_SESION });
        //En la mejora, con JWT esto (sesion) se deberia quitar cuando se coloca el token en la cabecera de las peticiones
        sesion()
          .then((data) => {
            dispatch({
              type: types.ASIGNAR_USUARIO_SESION,
              payload: data.usuario,
            });
          })
          .catch((err) => {
            console.log(err);
            dispatch({ type: types.CERRAR_SESION });
            history.push(window.FOLDER + "/signin");
          });
        history.push(window.FOLDER + "/");
      })
      .catch((err) => {
        mostrarMensaje(dispatch, err);
      });
  };
}

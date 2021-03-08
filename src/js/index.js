/*******************************************************************************/
/* Fecha Creación: 07 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Archivo principal que renderiza el HTML por medio del        */
/*                ID [#app].                                                   */
/*******************************************************************************/

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

/*******************************************************************************/
/* Fecha Creación: 07 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Archivo principal que invoca el componente la primera vez    */
/*                que se renderiza el sitio web.                               */
/*******************************************************************************/

import React from "react";
import SequentialTrafficLight from "./sequential-traffic-light";

export function Home() {
	return (
		<div>
			<SequentialTrafficLight initSequential="2" />
		</div>
	);
}

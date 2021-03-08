/*******************************************************************************/
/* Fecha Creación: 07 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Archivo para crear componentes de los botones de control de  */
/*                iniciar y deterner.                                          */
/*******************************************************************************/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SequentialTrafficLight from "./sequential-traffic-light";
import * as Param from "./parameters.js";

export default function ButtonOption() {
	const [option, setButtonSelected] = useState(3);

	useEffect(() => {
		switch (option) {
			case 1:
				ReactDOM.render(
					<SequentialTrafficLight initSequential="1" />,
					document.querySelector("#app")
				);

				break;

			case 2:
				ReactDOM.render(
					<SequentialTrafficLight initSequential="2" />,
					document.querySelector("#app")
				);

				break;
		}
	});

	return (
		<div>
			<div className="row buttonOptionClass">
				<div>
					{/* Componente para Botón de Iniciar */}
					<button
						onClick={() => setButtonSelected(1)}
						type="button"
						className="btn btn-light btn-lg turnTrafficLight">
						<i className="fas fa-caret-square-right"></i> Iniciar
					</button>
				</div>
				<div>
					{/* Componente para Botón de Detener */}
					<button
						onClick={() => setButtonSelected(2)}
						type="button"
						className="btn btn-warning btn-lg stopTrafficLight">
						<i className="fas fa-stop-circle"></i> Detener
					</button>
				</div>
			</div>
		</div>
	);
}

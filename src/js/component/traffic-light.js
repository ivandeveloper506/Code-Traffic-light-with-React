/*******************************************************************************/
/* Fecha Creación: 07 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Archivo principal que renderiza el semaforo en el DOM.       */
/*******************************************************************************/

import React, { useState } from "react";
import PropType from "prop-types";
import * as Param from "./parameters.js";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLight: null
		};
	}

	render(props) {
		const redLight = this.props.redLight;
		const yellowLight = this.props.yellowLight;
		const greenLight = this.props.greenLight;
		let classNameRedSelected = this.props.selectedLightRed;
		let classNameYellowSelected = this.props.selectedLightYellow;
		let classNameGreenSelected = this.props.selectedLightGreen;

		switch (this.state.selectedLight) {
			case redLight:
				classNameRedSelected =
					Param.SELECTEDLIGHT + " " + Param.HIGHREDLIGHT;
				classNameYellowSelected = "";
				classNameGreenSelected = "";

				break;
			case yellowLight:
				classNameRedSelected = "";
				classNameYellowSelected =
					Param.SELECTEDLIGHT + " " + Param.HIGHYELLOWLIGHT;
				classNameGreenSelected = "";

				break;
			case greenLight:
				classNameRedSelected = "";
				classNameYellowSelected = "";
				classNameGreenSelected =
					Param.SELECTEDLIGHT + " " + Param.HIGHGREENLIGHT;

				break;
		}

		return (
			<div>
				<div className="mainContainer">
					<div
						onClick={() =>
							this.setState({ selectedLight: redLight })
						}
						className={"redLight " + classNameRedSelected}></div>
					<div
						onClick={() =>
							this.setState({ selectedLight: yellowLight })
						}
						className={
							"yellowLight " + classNameYellowSelected
						}></div>
					<div
						onClick={() =>
							this.setState({ selectedLight: greenLight })
						}
						className={
							"greenLight " + classNameGreenSelected
						}></div>
				</div>
			</div>
		);
	}
}

// Props que permite controlar las propiedades para los diferentes estados de las luces del semaforo.
TrafficLight.propTypes = {
	redLight: PropType.string,
	yellowLight: PropType.string,
	greenLight: PropType.string,
	selectedLightRed: PropType.string,
	selectedLightYellow: PropType.string,
	selectedLightGreen: PropType.string
};

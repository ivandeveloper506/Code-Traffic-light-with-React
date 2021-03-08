/*******************************************************************************/
/* Fecha Creación: 07 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Archivo principal con la funcionalidad que permite           */
/*                renderizar las luces del semaforo, ya sea para uso manual o  */
/*                secuencial.                                                  */
/*******************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import TrafficLight from "./traffic-light.js";
import ButtonOption from "./button-option.js";
import * as Param from "./parameters.js";

let counterTrafficLight;

export default class SequentialTrafficLight extends React.Component {
	render(props) {
		let classNameRedSelected = "";
		let classNameYellowSelected = "";
		let classNameGreenSelected = "";
		let initSequential = this.props.initSequential;

		let counter = 1;

		if (initSequential === "1") {
			counterTrafficLight = setInterval(() => {
				const trafficElement = (
					<div>
						<div className="container">
							<div className="row">
								<div className="col-5 mt-3 trafficClass">
									<TrafficLight
										redLight={Param.REDLIGHT}
										yellowLight={Param.YELLOWLIGHT}
										greenLight={Param.GREENLIGHT}
										selectedLightRed={classNameRedSelected}
										selectedLightYellow={
											classNameYellowSelected
										}
										selectedLightGreen={
											classNameGreenSelected
										}
									/>
								</div>
								<div className="col-7">
									<ButtonOption />
								</div>
							</div>
						</div>
					</div>
				);

				switch (counter) {
					case 1: // Luz Roja
						classNameRedSelected =
							Param.SELECTEDLIGHT + " " + Param.HIGHREDLIGHT;
						classNameYellowSelected = "";
						classNameGreenSelected = "";

						break;
					case 2: // Luz Amarilla
						classNameRedSelected = "";
						classNameYellowSelected =
							Param.SELECTEDLIGHT + " " + Param.HIGHYELLOWLIGHT;
						classNameGreenSelected = "";

						break;
					case 3: // Luz Verde
						classNameRedSelected = "";
						classNameYellowSelected = "";
						classNameGreenSelected =
							Param.SELECTEDLIGHT + " " + Param.HIGHGREENLIGHT;

						break;
				}

				if (counter === 3) {
					counter = 1;
				} else {
					counter++;
				}

				ReactDOM.render(trafficElement, document.querySelector("#app"));
			}, Param.SECONDSCOUNTER);
		} else {
			clearInterval(counterTrafficLight);

			const trafficElement2 = (
				<div>
					<div className="container">
						<div className="row">
							<div className="col-5 mt-3 trafficClass">
								<TrafficLight
									redLight={Param.REDLIGHT}
									yellowLight={Param.YELLOWLIGHT}
									greenLight={Param.GREENLIGHT}
									selectedLightRed=""
									selectedLightYellow=""
									selectedLightGreen=""
								/>
							</div>
							<div className="col-7">
								<ButtonOption />
							</div>
						</div>
					</div>
				</div>
			);

			ReactDOM.render(trafficElement2, document.querySelector("#app"));
		}

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-5 mt-3 trafficClass">
							<TrafficLight
								redLight={Param.REDLIGHT}
								yellowLight={Param.YELLOWLIGHT}
								greenLight={Param.GREENLIGHT}
								selectedLightRed=""
								selectedLightYellow=""
								selectedLightGreen=""
							/>
						</div>
						<div className="col-7">
							<ButtonOption />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SequentialTrafficLight.propTypes = {
	initSequential: PropType.string
};

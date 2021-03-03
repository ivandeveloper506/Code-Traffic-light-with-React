import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./traffic-light.js";
import * as Param from "./parameters.js";

export function SequentialTrafficLight() {
	return (
		<div>
			<TrafficLight
				redLight={Param.REDLIGHT}
				yellowLight={Param.YELLOWLIGHT}
				greenLight={Param.GREENLIGHT}
				selectedLightRed=""
				selectedLightYellow=""
				selectedLightGreen=""
			/>
		</div>
	);
}

let classNameRedSelected = "";
let classNameYellowSelected = "";
let classNameGreenSelected = "";

let counter = 1;

setInterval(() => {
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

	ReactDOM.render(
		<TrafficLight
			redLight={Param.REDLIGHT}
			yellowLight={Param.YELLOWLIGHT}
			greenLight={Param.GREENLIGHT}
			selectedLightRed={classNameRedSelected}
			selectedLightYellow={classNameYellowSelected}
			selectedLightGreen={classNameGreenSelected}
		/>,
		document.querySelector("#app")
	);
}, 3000);

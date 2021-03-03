import React from "react";
import TrafficLight from "./traffic-light.js";
import * as Param from "./parameters.js";

export function InitialTrafficLight() {
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

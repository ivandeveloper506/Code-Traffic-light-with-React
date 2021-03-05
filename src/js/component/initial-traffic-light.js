import React from "react";
import TrafficLight from "./traffic-light.js";
import ButtonOption from "./button-option.js";
import * as Param from "./parameters.js";

export default function InitialTrafficLight() {
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

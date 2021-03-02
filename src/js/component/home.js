import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import TrafficLight from "./traffic-light.js";

//create your first component
export function Home() {
	return (
		<div>
			<TrafficLight />
		</div>
	);
}

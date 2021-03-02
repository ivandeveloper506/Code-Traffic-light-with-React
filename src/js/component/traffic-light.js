import React, { useState } from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLight: null
		};
	}

	// let classNameSelected = "redLight";
	// let classNameRedLight = "redLight";
	// let classNameYellowLight = "yellowLight";
	// let classNameGreenLight = "greenLight";

	// let selectedRedLight = "selectedRedLight";
	// const selectedYellowLight = "selectedLightRed";
	// const selectedGreenLight = "selectedLightRed";

	// const [trafficLightColor, setTrafficLightColor] = useState(
	// 	classNameSelected
	// );

	render() {
		const selectedLight = "selectedLight";
		const redLight = "redLight";
		const yellowLight = "yellowLight";
		const greenLight = "greenLight";
		const lowRedLight = "lowRedLight";
		const lowYellowLight = "lowYellowLight";
		const lowGreenLight = "lowGreenLight";
		let classNameRedSelected = "";
		let classNameYellowSelected = "";
		let classNameGreenSelected = "";

		let classNameSelected = "";

		console.log(this.state);

		switch (this.state.selectedLight) {
			case redLight:
				classNameRedSelected = selectedLight;
				classNameYellowSelected = lowYellowLight;
				classNameGreenSelected = lowGreenLight;

				break;
			case yellowLight:
				classNameRedSelected = lowRedLight;
				classNameYellowSelected = selectedLight;
				classNameGreenSelected = lowGreenLight;

				break;
			case greenLight:
				classNameRedSelected = lowRedLight;
				classNameYellowSelected = lowYellowLight;
				classNameGreenSelected = selectedLight;

				break;
		}

		return (
			<div>
				<div className="topTraffic"></div>

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

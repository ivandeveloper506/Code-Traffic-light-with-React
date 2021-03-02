import React, { useState } from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLight: null
		};
	}

	render() {
		const selectedLight = "selectedLight";
		const redLight = "redLight";
		const yellowLight = "yellowLight";
		const greenLight = "greenLight";
		const highRedLight = "highRedLight";
		const highYellowLight = "highYellowLight";
		const highGreenLight = "highGreenLight";
		let classNameRedSelected = "";
		let classNameYellowSelected = "";
		let classNameGreenSelected = "";

		let classNameSelected = "";

		switch (this.state.selectedLight) {
			case redLight:
				classNameRedSelected = selectedLight + " " + highRedLight;
				classNameYellowSelected = "";
				classNameGreenSelected = "";

				break;
			case yellowLight:
				classNameRedSelected = "";
				classNameYellowSelected = selectedLight + " " + highYellowLight;
				classNameGreenSelected = "";

				break;
			case greenLight:
				classNameRedSelected = "";
				classNameYellowSelected = "";
				classNameGreenSelected = selectedLight + " " + highGreenLight;

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

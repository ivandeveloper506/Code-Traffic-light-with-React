import React from "react";
import ReactDOM from "react-dom";
import InitialTrafficLight from "./initial-traffic-light";
import SequentialTrafficLight from "./sequential-traffic-light";
import * as Param from "./parameters.js";

export default class ButtonOption extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonSelected: 2
		};
	}

	render() {
		console.log("Entro automatico al boton.");

		switch (this.state.buttonSelected) {
			case 1:
				<SequentialTrafficLight />;

				console.log("Clic al 1");

				break;

			case 2:
				<InitialTrafficLight />;

				console.log("Clic al 2");

				break;
		}

		return (
			<div>
				<div className="col-7 mt-3">
					<div className="row optionClass">
						<div
							onClick={() => this.setState({ buttonSelected: 1 })}
							className="turnTrafficLight">
							<i className="fas fa-caret-square-right"></i>
						</div>
						<div
							onClick={() => this.setState({ buttonSelected: 2 })}
							className="stopTrafficLight">
							<i className="fas fa-stop-circle"></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

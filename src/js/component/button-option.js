/*

import React from "react";
import ReactDOM from "react-dom";
import InitialTrafficLight from "./initial-traffic-light";
import SequentialTrafficLight from "./sequential-traffic-light";
import * as Param from "./parameters.js";

export default class ButtonOption extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonSelected: 3
		};
	}

	render() {
		switch (this.state.buttonSelected) {
			case 1:
				// ReactDOM.render(
				// 	<SequentialTrafficLight initSequential="1" />,
				// 	document.querySelector("#app")
				// );

				break;

			case 2:
				ReactDOM.render(
					<InitialTrafficLight />,
					document.querySelector("#app")
				);

				break;
		}

		return (
			<div>
				<div className="row">
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
		);
	}
}

*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import InitialTrafficLight from "./initial-traffic-light";
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
					<InitialTrafficLight />,
					document.querySelector("#app")
				);

				break;
		}
	});

	return (
		<div>
			<div className="row buttonOptionClass">
				<div
					onClick={() => setButtonSelected(1)}
					className="turnTrafficLight">
					<i className="fas fa-caret-square-right"></i>
				</div>
				<div
					onClick={() => setButtonSelected(2)}
					className="stopTrafficLight">
					<i className="fas fa-stop-circle"></i>
				</div>
			</div>
		</div>
	);
}

import React from "react";

import SequentialTrafficLight from "./sequential-traffic-light";

export function Home() {
	return (
		<div>
			<SequentialTrafficLight initSequential="2" />
		</div>
	);
}

import React, { useEffect, useState } from "react";

import { Clock } from "./Clock.jsx";

export const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount((previousCount) => previousCount + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	console.log(count);

	let one = Math.floor(count / 1);
	let two = Math.floor(count / 10);
	let three = Math.floor(count / 100);
	let four = Math.floor(count / 1000);
	let five = Math.floor(count / 10000);
	let six = Math.floor(count / 100000);

	return (
		<div>
			<Clock
				num1={six}
				num2={five}
				num3={four}
				num4={three}
				num5={two}
				num6={one}
			/>
		</div>
	);
};

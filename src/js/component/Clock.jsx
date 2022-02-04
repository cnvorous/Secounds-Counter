import React from "react";
import PropTypes from "prop-types";

export const Clock = (props) => {
	return (
		//page container
		<div className="container">
			<div className="counter-container row bg-dark justify-content-center text-light d-inline-flex">
				<div className="icon-container col-1 mx-2">
					<i class="far fa-clock text-light"></i>
				</div>
				<div className="per-second-containter text-light col-1 mx-2">
					{props.num1 % 10}
				</div>
				<div className="per-second-containter text-light col-1 mx-2">
					{props.num2 % 10}
				</div>
				<div className="per-second-containter text-light col-1 mx-2">
					{props.num3 % 10}
				</div>
				<div className="per-second-containter text-light col-1 mx-2">
					{props.num4 % 10}
				</div>
				<div className="per-second-containter text-light col-1 mx-2">
					{props.num5 % 10}
				</div>
				<div className="per-second-containter text-light col-1 mx-2">
					{props.num6 % 10}
				</div>
			</div>
		</div>
	);
};

Clock.propTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	num3: PropTypes.number,
	num4: PropTypes.number,
	num5: PropTypes.number,
	num6: PropTypes.number,
};

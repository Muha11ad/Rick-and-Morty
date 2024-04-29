import { useState } from "react";
import { FilterCheckbox } from "../../filterCheckbox/index.js";
import "./FilterGender.scss";

export const FilterGender = () => {
    const [isExpanded, setIsExpanded] = useState(false);
	const toggleAccordion = (): void => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div className="accardion-wrapper">
			<button
				className={`gender-btn ${isExpanded ? "expanded-btn" : ""} `}
				onClick={toggleAccordion}
			>
				<p>Gender</p>
				<i
					className={`bx ${isExpanded ? "bx-chevron-up" : "bx-chevron-down"}`}
				></i>
			</button>
			<div className={`accordion__body ${isExpanded ? "expanded-body" : ""}`}>
				<FilterCheckbox />
			</div>
		</div>
	);
};

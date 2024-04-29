import { useState } from "react";
import { FilterCheckbox } from "../../filterCheckbox/index.js";
import "./FilterStatus.scss";

export const FilterStatus = () => {
    const [isExpanded, setIsExpanded] = useState(false);
	const toggleAccordion = (): void => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div className="accardion-wrapper">
			<button
				className={`status-btn ${isExpanded ? "expanded-btn" : ""} `}
				onClick={toggleAccordion}
			>
				<p>Status</p>
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

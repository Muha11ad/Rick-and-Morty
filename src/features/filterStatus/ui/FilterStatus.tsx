//imports start
import { useState } from "react";
import { useAppSelector } from "../../../shared/store/store.js";
import { FilterCheckbox } from "../../filterCheckbox/index.js";
import "./FilterStatus.scss";
//imports end

export const FilterStatus = () => {
//variables start
const [isExpanded, setIsExpanded] = useState(false);
const toggleAccordion = (): void => {
	setIsExpanded(!isExpanded);
};
const statuses = useAppSelector((state) => state.characters.statusesArray);
//variables send
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
				{statuses
					? statuses.map((status : any, index : any) => (
							<FilterCheckbox key={index} id={index} text={status} name="status" />
					  ))
					: " "}
			</div>
		</div>
	);
};

//imports start
import { useState } from "react";
import { useAppSelector } from "../../../shared/store/store.js";
import { FilterCheckbox } from "../../filterCheckbox/index.js";
import "./FilterSpecy.scss";
//imports end

export const FilterSpecy = () => {
//variables start
const [isExpanded, setIsExpanded] = useState(false);
const toggleAccordion = (): void => {setIsExpanded(!isExpanded);};
const species = useAppSelector((state) => state.characters.speciesArray);
//variables send

	return (
		<div className="accardion-wrapper">
			<button
				className={`specy-btn ${isExpanded ? "expanded-btn" : ""} `}
				onClick={toggleAccordion}
			>
				<p>Species</p>
				<i
					className={`bx ${isExpanded ? "bx-chevron-up" : "bx-chevron-down"}`}
				></i>
			</button>
			<div className={`accordion__body ${isExpanded ? "expanded-body" : ""}`}>
				{species
					? species.map((specy, index) => {
							return <FilterCheckbox key={index} id={index} text={specy} name="specy" />;
					  })
					: ""}
			</div>
		</div>
	);
};

//imports start
import { useState } from "react";
import { useAppSelector } from "../../../shared/store/store.js";
import { FilterCheckbox } from "../../filterCheckbox/index.js";
import "./FilterGender.scss";
//imports end

export const FilterGender = () => {

//variables start
const [isExpanded, setIsExpanded] = useState(false);
const toggleAccordion = (): void => {setIsExpanded(!isExpanded);};
const genders = useAppSelector(state => state.characters.genderArray)
//variables send

return (
	<div className="accardion-wrapper">
		<button
			className={`gender-btn ${isExpanded ? "expanded-btn" : ""} `}
			onClick={toggleAccordion}>
			<p>Gender</p>
			<i className={`bx ${isExpanded ? "bx-chevron-up" : "bx-chevron-down"}`}></i>
		</button>
		<div className={`accordion__body ${isExpanded ? "expanded-body" : ""}`}>
			{
				genders ? 
				genders.map((gender, index) => {
				return <FilterCheckbox  key={index} id={index} text={gender} name="gender" />
				})
					:  ""
				}
			</div>
		</div>
	);
};

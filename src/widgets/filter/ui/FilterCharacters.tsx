import { FilterGender } from "../../../features/filterGender/index.js";
import { FilterSpecy } from "../../../features/filterSpecy/index.js";
import { FilterStatus } from "../../../features/filterStatus/index.js";
import "./FilterCharacters.scss";

export const FilterCharacters = () => {
	return (
		<div className="filter-wrapper">
			<h3 className="filter__title">Filters</h3>
			<button className="filter__btn-reset">Clear filters</button>
			<FilterStatus/>
			<FilterSpecy/>
			<FilterGender/>
			</div>
	);
};

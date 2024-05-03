import { FilterGender } from "../../../features/filterGender/index.js";
import { FilterSpecy } from "../../../features/filterSpecy/index.js";
import { FilterStatus } from "../../../features/filterStatus/index.js";
import { checkRadio, getByGender, getBySpecy, getByStatus } from "../../../pages/charachters/model/CharactersSlice.js";
import { useAppDispatch } from "../../../shared/store/store.js";
import "./FilterCharacters.scss";

export const FilterCharacters = () => {
	const distpatch = useAppDispatch()
	function clearFilters(){
		distpatch(getByGender(""))
        distpatch(getBySpecy(""))
        distpatch(getByStatus(""))
		distpatch(checkRadio(false))	
	} 
	return (
		<div className="filter-wrapper">
			<h3 className="filter__title">Filters</h3>
			<button className="filter__btn-reset"
			onClick={()=>clearFilters()}
			>Clear filters</button>
			<FilterStatus/>
			<FilterSpecy/>
			<FilterGender/>
			</div>
	);
};

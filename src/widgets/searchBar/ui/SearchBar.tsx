import { getByName } from "../../../pages/charachters/model/CharactersSlice";
import { useAppDispatch } from "../../../shared/store/store";
import "./SearchBar.scss";

export const SearchBar = () => {
	const dispatch = useAppDispatch();
	const getValue = (event: string) => {
		dispatch(getByName(event));
	};
	return (
		<div className="searchbar">
			<input
				onChange={(event) => getValue(event.target.value)}
				className="search-input"
				type="text"
				placeholder="Search for characters"
			/>
			<button className="search-btn">Search</button>
		</div>
	);
};

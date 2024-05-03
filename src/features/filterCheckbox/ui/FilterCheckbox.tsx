//imports start
import {getByGender, getByStatus, getBySpecy} from "../../../pages/charachters/model/CharactersSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import "./FilterCheckbox.scss";
//imports end

interface FilterCheckboxProps {
	name: string;
	id: number;
	text: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({text, id, name}) => {
	const dispatch = useAppDispatch();
	const filterByClick = () => {
		switch (name) {
			case "gender":
				dispatch(getByGender(text));
				break;
			case "status":
				dispatch(getByStatus(text));
				break;
			case "specy":
				dispatch(getBySpecy(text));
				break;
		}
	};
	
	return (
		<>
			<input
				onClick={() => filterByClick()}
				type="radio"
				className="radio-check"
				name={name}
				id={`${name}-${id}`}
				autoComplete="off"/>
			<label className="label-radio label-secondary" htmlFor={`${name}-${id}`}>
				{text}
			</label>
		</>
	);
};

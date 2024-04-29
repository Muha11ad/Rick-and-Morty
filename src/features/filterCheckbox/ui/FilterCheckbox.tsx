import "./FilterCheckbox.scss"

export const FilterCheckbox = () => {
	return (
		<>
			<input
				type="checkbox"
				className="btn-check"
				name="options"
				id="1"
				autoComplete="off"
			/>
			<label className="btn btn-secondary" htmlFor="1">
				Alive
			</label>
		</>
	);
};

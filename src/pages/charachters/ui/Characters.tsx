import { Card } from "../../../entities/card/index.js";
import { Header } from "../../../widgets/header/index.js";
import { SearchBar } from "../../../widgets/searchBar/indext.js";
import "./Characters.scss";
//imports from redux
import {
	useAppDispatch,
	useAppSelector,
} from "../../../shared/store/store.js";
import { fetchCharacters, SingleHeroState } from "../model/CharacterSlice.js";
import { useEffect } from "react";
//redux ends
import { FilterCharacters } from "../../../widgets/filter/index.js";
export const Characters = () => {
	const distpatch = useAppDispatch();
	const data = useAppSelector((state) => state.characters.data);
	const status = useAppSelector((state) => state.characters.status);
	const error = useAppSelector((state) => state.characters.error);

	useEffect(() => {
		if (status === "idle") distpatch(fetchCharacters());
	}, [status, distpatch]);

	let content;
	if (status === "loading") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		content = data.map((item: SingleHeroState) => (
			<Card key={item.id}  item={item}/>
		));
	} else {
		content = <p>{error}</p>;
	}

	return (
		<>
			<Header />
			<div className="container character_container">
				<h2 className="character__title">Characters</h2>
				<SearchBar />
				<div className="character-body">
					<FilterCharacters />
					<ul className="character__body__list">{content}</ul>
				</div>
			</div>
		</>
	);
	}

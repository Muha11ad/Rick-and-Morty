//imports start
import "./Characters.scss";
import { useEffect } from "react";
import { Card } from "../../../entities/card";
import { Header } from "../../../widgets/header";
import { SearchBar } from "../../../widgets/searchBar";
import { Pagination } from "../../../features/Pagination/index.js";
import { FilterCharacters } from "../../../widgets/filter/index.js";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store.js";
import { Loading } from "../../../widgets/loading";
import { fetchCharacters, SingleHeroState } from "../model/CharactersSlice";
//imports end
export const Characters = () => {
	// variables
	const distpatch = useAppDispatch();
	const data = useAppSelector((state) => state.characters.data);
	const error = useAppSelector((state) => state.characters.error);
	const dataStatus = useAppSelector((state) => state.characters.statusOfData);
	const activePage = useAppSelector((state) => state.page.selected);
	const name = useAppSelector((state) => state.characters.name);
	const gender = useAppSelector((state) => state.characters.gender);
	const specy = useAppSelector((state) => state.characters.specy);
	const characterStatus = useAppSelector((state) => state.characters.status);
	// variables
	useEffect(() => {
		distpatch(
			fetchCharacters({
				query: "character",
				activePage: activePage,
				name: name,
				characterStatus: characterStatus,
				specy: specy,
				gender: gender,
			})
		);
		console.log(activePage);
		console.log(name);
	}, [activePage, distpatch, name, specy, gender, characterStatus]);

	let content;
	if (dataStatus === "loading") {
		content = <Loading />;
	} else if (dataStatus === "succeeded") {
		content = data?.results?.map((item: SingleHeroState) => (
			<Card key={item.id} item={item} />
		));
	} else {
		content = <p>{error}</p>;
	}

	return (
		<>
			<Header />
			<div className="container characters-container">
				<h2 className="characters__title">Characters</h2>
				<SearchBar />
				<div className="characters-body">
					<FilterCharacters />
					<ul className="characters__list">{content}</ul>
				</div>
				<Pagination pageCount={Number(data?.info?.pages)} />
			</div>
		</>
	);
};

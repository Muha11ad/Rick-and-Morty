import "./Episode.scss";
import { useEffect } from "react";
import { Card } from "../../../entities/card/index.js";
import { fetchCategory, IndividualState } from "../../charachters/model/CharacterSlice.js";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store.js";
import { Header } from "../../../widgets/header/index.js";

export const Episode = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.category.data);
	const status = useAppSelector((state) => state.category.status);
	const error = useAppSelector((state) => state.category.error);

	useEffect(() => {
		if (status === "idle") dispatch(fetchCategory("episode"));
	}, [status, dispatch]);

	let content ;
	if (status === "laoding") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		content = data.map((item : IndividualState) => (
	 	<Card key={item.id} item={item} />
        ));
	} else {
		content = <p>{error}</p>;
	}
	return (
		<>
			<Header />
			<div className="container episode__container">
				<h2 className="episode__title">Episode name : Pilot</h2>
				<p className="episode__time">Air Date: December 2, 2013</p>
				<div className="episode__body">
					<ul className="episode__list">{content}</ul>
				</div>
			</div>
		</>
	);
};

import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { Header } from "../../../widgets/header";
import { fetchSingleCharacter } from "../model/CharacterSlice";
import "./Character.scss";

export const Character = () => {
	const { id } = useParams();
	const cleareId = id?.replace(":", "");
	const dispatch = useAppDispatch();
	const singleCharacter = useAppSelector(
		(state) => state.character?.singleCharacter
	);
	const { name, status, species, gender, origin, location, image, created } =
		singleCharacter;
	const createdDate = new Date(created);
	const formattedDate = createdDate.toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	useEffect(() => {
		dispatch(fetchSingleCharacter({ idOfCharacter: cleareId }));
	}, [dispatch, cleareId]);
	return (
		<>
			<Header />
			<div className="container character-container">
				<img className="character-img" src={image} alt={name} />
				<div className="character-infos-wrapper">
					<p className="character__subtitle">
						Name : <span>{name} </span>
					</p>
					<p className="character__subtitle">
						Status : <span>{status}</span>
					</p>
					<p className="character__subtitle">
						Specy : <span>{species} </span>
					</p>
					<p className="character__subtitle">
						Gender : <span>{gender}</span>
					</p>
					<p className="character__subtitle">
						Origin : <span>{origin?.name}</span>
					</p>
					<p className="character__subtitle">
						Location : <span>{location?.name}</span>
					</p>
					<p className="character__subtitle">
						Createrd : <span>{formattedDate}</span>
					</p>
				</div>
			</div>
		</>
	);
};

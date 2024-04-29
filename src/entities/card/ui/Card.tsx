import { Link } from "react-router-dom";
import { SingleHeroState } from "../../../pages/charachters/model/CharacterSlice.js";

import { HerosStatuses } from "../../../shared/herosStatuses/index.js";
import "./Card.scss";
export const Card = ({ item }: any) => {
	const {
		id,
		image,
		name,
		status,
		species,
		gender,
		location,
	}: SingleHeroState = item;
	return (
		<li className="card-wrapper">
			<Link id={id.toString()} className="card__link" to="/">
				<img className="card__img" src={image} alt="Card image" />
				<div className="card__body">
					<h3 className="body__title">{name}</h3>
					<HerosStatuses status={status} species={species} gender={gender} />
					<p className="body__subtitle">
						<strong> Last location : {location.name} </strong>
					</p>
				</div>
			</Link>
		</li>
	);
};

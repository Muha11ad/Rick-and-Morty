//imports
import "./Location.scss";
import { Header } from "../../../widgets/header/index.js";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { useEffect } from "react";
import { fetchLocation } from "../model/LocationSlice";
import { Card } from "../../../entities/card";
import { Select } from "../../../widgets/select";
//imports

export const Location = () => {
	//variables
	const singleLocation = useAppSelector((state) => state.location.singleLocation);
	const allApisodes = useAppSelector((state) => state.location.allLocations);
	const residents = useAppSelector((state) => state.location.residents);
	const id = useAppSelector((state) => state.location.id);
	const status = useAppSelector((state) => state.location.status);
	const dispatch = useAppDispatch();
	//variables

	//alghoritm
	useEffect(() => {
		dispatch(fetchLocation({ idOfLocation: id }));		
	}, [dispatch, id]);

	let locationName;
	let type;
	let content;
	if (status === "laoding") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		locationName = singleLocation.name; 
		type = singleLocation.type;
		content = residents?.map((item, index) => {
			return <Card key={index} item={item} />;
		});
	}
	//alghoritm

	return (
		<>
			<Header />
			<div className="container location__container">
				<div className="location__top">
					<h2 className="location__title">
					Dimension : <span className="blue"> {locationName}</span>
					</h2>
					<p className="location__time">
						Name : <span className="blue">{type}</span>
					</p>
				</div>
				<div className="location__body">
					<Select name="location" data={Array.isArray(allApisodes)? allApisodes : [allApisodes]}/>
					<ul className="location__list">{content}</ul>
				</div>
			</div>
		</>
	);
};

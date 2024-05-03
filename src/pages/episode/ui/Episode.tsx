//imports
import "./Episode.scss";
import { Header } from "../../../widgets/header/index.js";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { useEffect, useState } from "react";
import { fetchEpisode } from "../model/EpisodeSlice";
import { Card } from "../../../entities/card";
import { Select } from "../../../widgets/select";
//imports

export const Episode = () => {
	//variables
	const singleEpisode = useAppSelector((state) => state.episode.singleEpisode);
	const allApisodes = useAppSelector((state) => state.episode.allEpisodes);
	const characters = useAppSelector((state) => state.episode.characters);
	const id = useAppSelector((state) => state.episode.id);
	const status = useAppSelector((state) => state.episode.status);
	const dispatch = useAppDispatch();
	//variables

	//alghoritm
	useEffect(() => {
		dispatch(fetchEpisode({ idOfEpisode: id }));		
	}, [dispatch, id]);

	let episodeName;
	let airDate;
	let content;
	if (status === "laoding") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		episodeName = singleEpisode.name;
		airDate = singleEpisode.air_date;
		content = characters?.map((item, index) => {
			return <Card key={index} item={item} />;
		});
	}
	//alghoritm

	return (
		<>
			<Header />
			<div className="container episode__container">
				<div className="episode__top">
					<h2 className="episode__title">
						Episode name : <span className="blue"> {episodeName}</span>
					</h2>
					<p className="episode__time">
						Air Date: <span className="blue">{airDate}</span>
					</p>
				</div>
				<div className="episode__body">
					<Select name="Episode" data={Array.isArray(allApisodes)? allApisodes : [allApisodes]}/>
					<ul className="episode__list">{content}</ul>
				</div>
			</div>
		</>
	);
};

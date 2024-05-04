import { SingleHeroState } from "../../../pages/charachters/model/CharactersSlice";
import { getEpisode } from "../../../pages/episode/model/EpisodeSlice";
import { getLocation } from "../../../pages/location/model/LocationSlice";
import { useAppDispatch } from "../../../shared/store/store";
import "./Select.scss";
interface SelectProps {
	name: string;
	data: any[];
}
export const Select = ({ name, data }: SelectProps) => {
    const dispatch = useAppDispatch()
    function getId(event : any){
        dispatch(getEpisode(event.target.value))
        dispatch(getLocation(event.target.value))
    }
	return (
		<div className="select-wrapper">
			<h2 className="select__title">Choose {name}</h2>
			<select onChange={(value) => getId(value)} name={name} className="select">
				{data?.map((item: SingleHeroState) => {
					return (
						<option key={item.id} value={item.id} className="select__options">
							<span className="options__child">
								{name}-{item.id}
							</span>
							: {item.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

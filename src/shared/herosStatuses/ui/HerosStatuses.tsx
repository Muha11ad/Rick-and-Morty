import "./HerosStatuses.scss";
interface HerosStatusesProps {
	status: string;
	gender: string;
	species: string;
  }
export const HerosStatuses : React.FC<HerosStatusesProps> = ({status , gender, species}) => {
	return (
		<div className="statuses-wrapper">
			<div className="statuses-wrapper__top">
				<p className={status === "Alive" ? "green" : status === "Dead" ? "red" : "gray"  }>
					<strong> Status : </strong> {status}
				</p>
				<p className={gender === "Male" ? "green" : gender === "Female" ? "red" : "gray"  }>
					<strong> Gender : </strong> {gender}
				</p>
			</div>
			<p className={species === "Human" ? "blue" : "gray"  }>
				<strong> Specy : </strong> {species}
			</p>
		</div>
	);
};

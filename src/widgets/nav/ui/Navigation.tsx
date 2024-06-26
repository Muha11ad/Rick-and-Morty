import { NavLink } from "react-router-dom";
import "./Navigation.scss"

interface propsState{
    to : string;
    context: string;
}

export const Navigation = ({to, context} : propsState) => {
	return (
		<li className="item">
			<NavLink to={to}  className={({isActive}) => isActive ? "active": "inactive" }>
				{context}
			</NavLink>
		</li>
	);
};

import { Link } from "react-router-dom";
import { Navigation } from "../../nav/index.js";
import "./Header.scss";
export const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h1 className="header__title">
					<Link className="header__title-link" to="/">
						Rick & Morty <span className="header__title-part"> WiKi </span>
					</Link>
				</h1>
				<nav className="header__nav">
					<ul className="nav__list">
						<Navigation to={"/"} context={"Characters"} />
						<Navigation to={"/episode"} context={"Episode"} />
						<Navigation to={"/location"} context={"Location"} />
					</ul>
				</nav>
			</div>
		</header>
	);
};

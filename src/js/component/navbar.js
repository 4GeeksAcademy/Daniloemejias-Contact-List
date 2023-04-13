import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg"

export const Navbar = () => {
	const {store, actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
					<button onClick={()=>actions.addContact({
						name:"Danilo",
						address:"Uruguay",
						email:"Danilo@4geeks.com",
						phone:"095-014-724",
						img:rigoImage
						})} className="btn btn-primary">Agregar</button>
			</div>
		</nav>
	);
};

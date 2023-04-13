// import React, { useContext } from "react";
// import { ContactCard } from "./ContactCard";
// import rigoImage from "../../img/rigo-baby.jpg";
// import {Context} from `../store/appContext`


// export const Home = () => {
// 	const {store , actions}=useContext(Context)
// 	const {contacts}=store

// 	return (
// 		<div className="d-flex flex-column justify-center mt-5">
// 			<h1>Contact List</h1>
// 			<div className="list-group contact-list">
// 				{contacts.map((contacts, index)=>
// 					<ContactCard
// 						name={contacts.name}
// 						address={contacts.address}
// 						email={contacts.email}
// 						phone={contacts.phone}
// 						img={contacts.img}
// 						key={index}
// 					/>
// 				)}
// 			</div>
// 		</div>
			
		
// 	);
// };

// export default Home;
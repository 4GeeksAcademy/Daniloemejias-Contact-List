import React, {useContext} from "react";
import { ContactCard } from "../component/ContactCard";
import "../../styles/home.css";
import rigoImage from "../../img/rigo-baby.jpg";
import {Context} from "../store/appContext"

export const Home = () => {
    const {store, actions}=useContext(Context)

    const {contacts}=store
    
    return(
	<div className="d-flex flex-column justify-center mt-5">
		<h1>Contact List</h1>
		<div className="list-group contact-list">
            {contacts.map((contact, index) =>
                <ContactCard
                    name={contact.name}
                    address={contact.address}
                    email={contact.email}
                    phone={contact.phone}
                    img={rigoImage}
                    onDelete={()=>actions.delContact(index)}
                    key={index}
                />
            )}
        </div>
	</div>
)};

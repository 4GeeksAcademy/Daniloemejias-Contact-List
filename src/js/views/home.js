import React, {useContext, useEffect} from "react";
import { ContactCard } from "../component/ContactCard";
import { Modal } from "../component/Modal";
import "../../styles/home.css";
import rigoImage from "../../img/rigo-baby.jpg";
import {Context} from "../store/appContext"

export const Home = () => {
    const {store, actions}=useContext(Context)
    const {contacts}=store
    useEffect(()=>{
        actions.getAgenda()
    },[])
    return(
	<div className="d-flex flex-column justify-center mt-5">
		<h1>Contact List</h1>
		<div className="list-group contact-list">
            {contacts.map((contact, index) =>
                <div key={index}>

                        <ContactCard
                            name={contact.full_name}
                            address={contact.address}
                            email={contact.email}
                            phone={contact.phone}
                            img={rigoImage}
                            onDelete={()=>actions.delContact(contact.id)}
                            index={contact.id}
                        />
                        <Modal index={contact.id}></Modal>
                </div>
            )}
        </div>
	</div>
)};

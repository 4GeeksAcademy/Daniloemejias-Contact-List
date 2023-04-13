import rigoImage from "../../img/rigo-baby.jpg";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{name:"Danilo", address:"Uruguay", email:"Danilo@4geeks.com", phone:"095-014-724", img:rigoImage},
				{name:"Danilo", address:"Uruguay", email:"Danilo@4geeks.com", phone:"095-014-724", img:rigoImage},
				{name:"Danilo", address:"Uruguay", email:"Danilo@4geeks.com", phone:"095-014-724", img:rigoImage},
				{name:"Danilo", address:"Uruguay", email:"Danilo@4geeks.com", phone:"095-014-724", img:rigoImage},
				{name:"Danilo", address:"Uruguay", email:"Danilo@4geeks.com", phone:"095-014-724", img:rigoImage}
            ],
            numero:221
		},

		actions: {
			addContact:(contact)=>{
				let store=getStore()
				let newContacts=[...store.contacts,contact]
				setStore({contacts:newContacts})
			},
			delContact:(index)=>{
				let newContacts=[...getStore().contacts]
				newContacts.splice(index,1)
				setStore({contacts:newContacts})
			},
			exampleFunction: () =>{
                getActions().changeColor(0, "green");
            },
            loadSomeData: () =>{

			},
			changeColor: (index, color)=>{
				const store = getStore();
				const demo = store.demo.map((elm,i)=>{
					if(i === index) elm.background = color;
					return elm;
				});
				setStore({demo: demo});
			}
		}
	};
};

export default getState;

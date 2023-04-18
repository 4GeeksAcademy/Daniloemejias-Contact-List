import rigoImage from "../../img/rigo-baby.jpg";

const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
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
			updateContact(data, index){
				let newContacts=[...getStore().contacts]
				newContacts[index]={data, img:rigoImage}
				setStore({contacts:newContacts})
			},
			getAgenda:()=>{
				fetch (apiUrl+"/agenda/"+agendaSlug)
				.then(response=>{
					if(response.ok){
						//respueta satisfactoria
						return response.json()
					}else{
						//Tuve una respuesta de error
						console.log(response.status + ": " + response.statusText)
					}
				})
				.then(data=>{
					console.log(data)
					setStore({contacts:data})
				})
				.catch(error=>{
					console.error(error)
				})
				console.log("Inicada la peticion")
			},
			// Use getActions to call a function within a function
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

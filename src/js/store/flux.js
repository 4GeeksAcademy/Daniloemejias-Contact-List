import rigoImage from "../../img/rigo-baby.jpg";

const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
		},

		actions: {
			addContact:async (contact)=>{
				let response=await fetch(apiUrl + "/",{
					body:JSON.stringify({...contact, agenda_slug:agendaSlug}),
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					}
				})
				if(!response.ok){
					console.log(response.status +": " + response.statusText)
					return
				}
				let data=await response.json()
				//Agregar validacion para que no admita valores vacios
				let store=getStore()
				let newContacts=[...store.contacts,{...data, img:rigoImage}]
				setStore({contacts:newContacts})
			},
			delContact:async (id)=>{
				let response=await fetch(apiUrl +"/"+id,{
					method:"DELETE"
				})
				if(response.ok){
					let newContacts = [...getStore().contacts]
					let index = newContacts.findIndex(contact => contact.id == id)
					newContacts.splice(index,1)
					setStore({contacts: newContacts})
				}else{
					console.error(resp.status+":"+ resp.statusText)
				}
			},
			updateContact: async (contact, index) => {
				
				let response = await fetch(apiUrl+index,{
					body:JSON.stringify(contact),
					method:"PUT",
					headers:{
						"Content-Type":"application/json"
					}
				})
				if (!response.ok){
					console.log(response.status + ": "+response.statusText)
					return 
				}
				let store = getStore() 
				let newContacts =[...store.contacts];
				newContacts [index] = contact;
				setStore({ ...store, contacts: newContacts });
				console.log(newContacts)
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
					setStore({contacts:data.map(contact=>({...contact, img: rigoImage}))})
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

import{ADD_STAGIAIRE,REMOVE_STAGIAIRE,EDIT_STAGIAIRE} from '../Actions/actions';
const Stagiaires = {
		StagiairesListe : [
							{
								idstg :1, nom : "Lahnida",prenom :"Abdelghafour",
								adresse : "Guiliz Marrakech",Téléphone : "+212653479280",
								Filière : "FUS", Groupe : "FUS205",
								Compte : {login : "123",password : "123"},
							},
							{
								idstg :2, nom : " Dakiri",prenom :"ayoub",
								adresse :"Guiliz Marrakech",Téléphone : "+212610203600", 
								Filière : "FUS", Groupe : "FUS203",
								Compte : {login : "456", password : "456"},
							}
					]
}
export function StagiairesRed(state=Stagiaires.StagiairesListe,action)
{
	switch(action.type)
	{
		case ADD_STAGIAIRE :
			return [...state,action.payload];
		case REMOVE_STAGIAIRE :
			return state.filter((elm)=> elm.idstg != action.payload);
		case EDIT_STAGIAIRE :
			var listes =  state.find((elm)=> elm.idstg == action.payload.idstg)
			listes.nom = action.payload.nom 
			listes.prenom = action.payload.prenom
			listes.adresse = action.payload.adresse 
			listes.Téléphone = action.payload.Téléphone
			listes.fillier = action.payload.fillier 
			listes.Groupe = action.payload.Groupe
			return state
		default :
			return state;
	}
} 
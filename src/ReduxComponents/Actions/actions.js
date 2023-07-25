export const ADD_STAGIAIRE = "ADD_STAGIAIRE"
export const REMOVE_STAGIAIRE = "REMOVE_STAGIAIRE"
export const EDIT_STAGIAIRE = "EDIT_STAGIAIRE"

export function ADD_STAGIAIRE_action(Stagiaire)
	{

		return{
				type:ADD_STAGIAIRE,
				payload:Stagiaire
		}
	}
export function REMOVE_STAGIAIRE_action(idstg)
	{
		return {
				type:REMOVE_STAGIAIRE,
				payload:idstg	
	}
}
export function EDIT_STAGIAIRE_action(Stagiaire)
	{
		return {
				type:EDIT_STAGIAIRE,
				payload:Stagiaire	
	}
}
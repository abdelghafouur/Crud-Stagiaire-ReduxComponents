import React from 'react';
import {useDispatch} from'react-redux';
import{REMOVE_STAGIAIRE_action} from '../Actions/actions';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function DeleteStagiaire(){
    const {idstg} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
        function Supprimer()
            {  
                if (window.confirm("Press a button!") == true) {
                    dispatch(REMOVE_STAGIAIRE_action(idstg))
                    alert("Stagiaire bien Supprimer !")
                    navigate('/')
                }
            }
            
    return(
        <div>
                <input type="text" value={idstg} disabled/>
                <input type="submit" value="valider" onClick={()=>Supprimer()} />
                <br/>
        </div>
    )
}
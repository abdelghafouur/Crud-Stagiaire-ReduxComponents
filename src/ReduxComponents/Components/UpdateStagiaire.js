import React, { useState } from 'react';
import {useDispatch} from'react-redux';
import{EDIT_STAGIAIRE_action} from '../Actions/actions';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function UpdateStagiaire(){
    const {idstg} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listes = useSelector(state =>state)
    const Afficher = listes.find((elm)=> elm.idstg == idstg)
    const [newid,setID]=useState(Afficher.idstg)
    const [nom,setNom]=useState(Afficher.nom)
    const [prenom,setPrenom] =useState(Afficher.prenom)
    const [adresse,setaAdresse] =useState(Afficher.adresse)
    const [Téléphone,setTéléphone] =useState(Afficher.Téléphone)
    const [fillier,setFiliere] =useState(Afficher.Filière)
    const [Groupe,setGroupe] =useState(Afficher.Groupe)

        function Edit(e)
        {
            e.preventDefault();
            dispatch(EDIT_STAGIAIRE_action(
                {
                    idstg:newid,nom:nom,prenom:prenom,adresse :adresse,Téléphone :Téléphone,
                    Filière :fillier, Groupe :Groupe
                }))
            alert("bien Update !")
            navigate('/')
        }
    return(
        <div>
            <form onSubmit={(e)=>Edit(e)}>
                <label>Id </label><input type="text" disabled value={newid} onChange={(e)=>setID(e.target.value)} />
                <label>Nom </label><input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
                <label>Prenom </label><input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
                <label>Adrees </label><input type="text" value={adresse} onChange={(e)=>setaAdresse(e.target.value)} />
                <label>Telephon </label><input type="text" value={Téléphone} onChange={(e)=>setTéléphone(e.target.value)} />
                <label>fillier </label><input type="text" value={fillier} onChange={(e)=>setFiliere(e.target.value)} />
                <label>Groupe </label><input type="text" value={Groupe} onChange={(e)=>setGroupe(e.target.value)} />
                <input type="submit" />
            </form>
            <br/><br/>
        </div>
    )
}
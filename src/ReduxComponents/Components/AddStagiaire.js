import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import {useDispatch} from'react-redux';
import{ADD_STAGIAIRE_action} from '../Actions/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function AddStagiaire(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const listes = useSelector(state =>state)
    const [id,setID]=useState(listes.length+1)
    const [nom,setNom]=useState("")
    const [prenom,setPrenom] =useState("")
    const [adresse,setaAdresse] =useState("")
    const [Téléphone,setTéléphone] =useState("")
    const [fillier,setFiliere] =useState("")
    const [Groupe,setGroupe] =useState("")
    const [login,setlogin] =useState("")
    const [password,setpassword] =useState("")
        function Ajouter(e)
        {
            e.preventDefault();
            dispatch(ADD_STAGIAIRE_action(
                {
                    idstg :id,nom:nom,prenom:prenom,adresse :adresse,Téléphone :Téléphone,
                    Filière :fillier, Groupe :Groupe,Compte:{login:login,password:password},
                }))
            alert("L'inscription bien Ajouter !")
            navigate('/')
        }
    return(
        <div>
            <form onSubmit={(e)=>Ajouter(e)}>
                <label>Id </label><input type="text" value={id} disabled /><br/>
                <label>Nom </label><input type="text" onChange={(e)=>setNom(e.target.value)} /><br/>
                <label>Prenom </label><input type="text" onChange={(e)=>setPrenom(e.target.value)} /><br/>
                <label>Adrees </label><input type="text" onChange={(e)=>setaAdresse(e.target.value)} /><br/>
                <label>Telephon </label><input type="text" onChange={(e)=>setTéléphone(e.target.value)} /><br/>
                <label>fillier </label><input type="text" onChange={(e)=>setFiliere(e.target.value)} /><br/>
                <label>Groupe </label><input type="text" onChange={(e)=>setGroupe(e.target.value)} /><br/>
                <label>Login </label><input type="text" onChange={(e)=>setlogin(e.target.value)} /><br/>
                <label>Password </label><input type="text" onChange={(e)=>setpassword(e.target.value)} /><br/>
                <input type="submit" />
            </form>
            <br/><br/>
            <Link to="/">
                    return
            </Link>
        </div>
    )
}
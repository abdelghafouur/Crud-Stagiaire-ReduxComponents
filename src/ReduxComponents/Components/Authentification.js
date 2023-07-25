import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Authentification(){
    const navigate = useNavigate()
    const listes = useSelector(state =>state)
    const [login,setlogin] =useState("")
    const [password,setpassword] =useState("")
    var stagiaire = listes.find((elm)=> ( elm.Compte.login == login && elm.Compte.password == password ) )
        function Login(e)
        {
            e.preventDefault();
            (stagiaire == undefined)
                ?(alert("Ce compte de Stagiaire ne pas trouver."))
                :(navigate(`/ProfilStagiaire/${stagiaire.idstg}`))
        }
    return(
        <div>
            <form onSubmit={(e)=>Login(e)}>
                <label>Login </label><input type="text" onChange={(e)=>setlogin(e.target.value)} />
                <label>Password </label><input type="text" onChange={(e)=>setpassword(e.target.value)} />
                <input type="submit" />
            </form>
            <br/><br/>
            <Link to="/">
                    return
            </Link>
        </div>
    )
}
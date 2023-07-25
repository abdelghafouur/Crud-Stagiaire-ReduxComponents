import React from "react";
import { useSelector } from "react-redux";
import {Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Stagiaires()
    {
        const {idstg} = useParams()
        const listes = useSelector(state =>state)
        const e = listes.find((elm)=> elm.idstg == idstg)
        return(
            <div>
                <br/>
                <br/>
                <table border="1">
                    <tr>
                        <td>idstg</td>
                        <td>nom</td>
                        <td>prenom</td>
                        <td>adresse</td>
                        <td>Téléphone</td>
                        <td>Filière</td>
                        <td>Groupe</td>
                    </tr>
                        <tr>
                            <td>{e.idstg}</td>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>{e.adresse}</td>
                            <td>{e.Téléphone}</td>
                            <td>{e.Filière}</td>
                            <td>{e.Groupe}</td>
                        </tr>
                </table>
                <br/>
                <br/>
            </div>
        )
    }
import React from "react";
import { useSelector } from "react-redux";
import {Link } from 'react-router-dom';


export default function Stagiaires()
    {
        const listes = useSelector(state =>state)
        return(
            <div class="table-responsive">
                <table class="table table-striped text-successtable-border border-light">
                    <thead class="border-light">
                    <tr>
                        <th  scope="col" >idstg</th>
                        <th  scope="col" >nom</th>
                        <th  scope="col" >prenom</th>
                        <th  scope="col" >adresse</th>
                        <th  scope="col" >Téléphone</th>
                        <th  scope="col" >Filière</th>
                        <th  scope="col" >Groupe</th>
                        <th  scope="col" colSpan="2">action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listes.map((e)=>
                                        <tr>
                                            <td>{e.idstg}</td>
                                            <td>{e.nom}</td>
                                            <td>{e.prenom}</td>
                                            <td>{e.adresse}</td>
                                            <td>{e.Téléphone}</td>
                                            <td>{e.Filière}</td>
                                            <td>{e.Groupe}</td>
                                            <td> <Link to={`/DeleteStagiaire/${e.idstg}`}> <button class="btn btn-primary">Delete Stagiaire </button> </Link> </td>
                                            <td> <Link to={`/UpdateStagiaire/${e.idstg}`}> <button class="btn btn-primary">Update Stagiaire</button> </Link> </td>
                                            
                                        </tr>
                                        )}
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
                <Link class="btn btn-primary" to="/AddStagiaire">
                    Add Stagiaire
                </Link><br/><br/>
                <Link class="btn btn-primary" to="/Search">
                    Rechercher Stagiaire
                </Link><br/><br/>
                <Link class="btn btn-primary" to="/authentification">
                    Authentification
                </Link>
            </div>
        )
    }
import React, { useState } from 'react';
import { useSelector } from "react-redux";


export default function Search(){
    const listes = useSelector(state =>state)
    const [RechercherGroup,setRechercherGroup] =useState("")
    const [RechercherFilier,setRechercherFilier] =useState("")
    const [Choix,setChoix] =useState("")
    const [Filter,setFilter] =useState("")
        function Rechercher(e)
            {
                (Choix == "Groupe")
                ?(setFilter(listes.filter((e)=> e.Groupe == RechercherGroup )) )
                :(setFilter(listes.filter((elm)=> ( elm.Filière == RechercherFilier ) )) );
            }
            
    return(
        <div>
                Groupe :<input type="radio" value="Groupe" name="Choix" onChange={(e)=>setChoix(e.target.value)} />
                Filière :<input type="radio" value="Filière" name="Choix" onChange={(e)=>setChoix(e.target.value)} /><br/>
                Groupe : <input type="text" onChange={(e)=>setRechercherGroup(e.target.value)} />
                <input type="submit" value="ok" onClick={()=>Rechercher()} /><br/>
                Filière : <input type="text" onChange={(e)=>setRechercherFilier(e.target.value)} />
                <input type="submit" value="ok" onClick={()=>Rechercher()} />
                <br/><br/>
                {(Filter == "") 
                ?("Pas de stagiaire .")
                :(<>
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
                        {Filter.map((e)=>
                                        <tr>
                                            <td>{e.idstg}</td>
                                            <td>{e.nom}</td>
                                            <td>{e.prenom}</td>
                                            <td>{e.adresse}</td>
                                            <td>{e.Téléphone}</td>
                                            <td>{e.Filière}</td>
                                            <td>{e.Groupe}</td>
                                        </tr>
                                        )}
                </table>
                
                </>)
                }
        </div>
    )
}
import React from "react";
import {Store} from "./Store/Store"
import { Provider } from "react-redux";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Stagiaires from "./Components/Stagiaires";
import AddStagiaire from "./Components/AddStagiaire";
import DeleteStagiaire from "./Components/DeleteStagiaire"
import UpdateStagiaire from "./Components/UpdateStagiaire"
import Search from "./Components/Search"
import Authentification from "./Components/Authentification"
import ProfilStagiaire from "./Components/ProfilStagiaire"
export default function App(){
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Stagiaires/>} />
                        <Route path="/AddStagiaire" element={<AddStagiaire/>} />
                        <Route path="/DeleteStagiaire/:idstg" element={<DeleteStagiaire/>} />
                        <Route path="/UpdateStagiaire/:idstg" element={<UpdateStagiaire/>} />
                        <Route path="/Search" element={<Search/>} />
                        <Route path="/Authentification" element={<Authentification/>} />
                        <Route path="/ProfilStagiaire/:idstg" element={<ProfilStagiaire/>} />

                </Routes>
            </BrowserRouter>
        </Provider>
    )
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_STAGIAIRE_action } from '../Actions/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function AddStagiaire() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listes = useSelector(state => state);
    const [id, setID] = useState(listes.length + 1);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [adresse, setaAdresse] = useState("");
    const [Telephone, setTelephone] = useState("");
    const [fillier, setFiliere] = useState("");
    const [Groupe, setGroupe] = useState("");
    const [login, setlogin] = useState("");
    const [password, setpassword] = useState("");

    function Ajouter(e) {
        e.preventDefault();
        dispatch(ADD_STAGIAIRE_action({
            idstg: id,
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            Telephone: Telephone,
            Filière: fillier,
            Groupe: Groupe,
            Compte: { login: login, password: password }
        }));
        alert("L'inscription bien Ajouter !");
        navigate('/');
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            
            {/* Header */}
            <header className="bg-primary text-white py-3">
                <div className="container">
                    <h1 className="mb-0">My Application</h1>
                </div>
            </header>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/AddStagiaire">Add Stagiaire</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Search">Search Stagiaire</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/authentification">Authentification</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow-1 container mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Add Stagiaire</h2>
                        <form onSubmit={(e) => Ajouter(e)} className="mt-4">
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" id="id" value={id} disabled className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nom" className="form-label">Nom</label>
                                <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="prenom" className="form-label">Prénom</label>
                                <input type="text" id="prenom" onChange={(e) => setPrenom(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="adresse" className="form-label">Adresse</label>
                                <input type="text" id="adresse" onChange={(e) => setaAdresse(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telephone" className="form-label">Téléphone</label>
                                <input type="text" id="telephone" onChange={(e) => setTelephone(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fillier" className="form-label">Filière</label>
                                <input type="text" id="fillier" onChange={(e) => setFiliere(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="groupe" className="form-label">Groupe</label>
                                <input type="text" id="groupe" onChange={(e) => setGroupe(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="login" className="form-label">Login</label>
                                <input type="text" id="login" onChange={(e) => setlogin(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" id="password" onChange={(e) => setpassword(e.target.value)} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Stagiaire</button>
                        </form>
                        <br />
                        <Link to="/" className="btn btn-secondary">Return</Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <div className="container">
                    <p className="mb-0">© 2024 My Application. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}

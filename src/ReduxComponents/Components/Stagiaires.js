import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Stagiaires() {
    const listes = useSelector(state => state);

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
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prénom</th>
                                <th scope="col">Adresse</th>
                                <th scope="col">Téléphone</th>
                                <th scope="col">Filière</th>
                                <th scope="col">Groupe</th>
                                <th scope="col" colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listes.map(e => (
                                <tr key={e.idstg}>
                                    <td>{e.idstg}</td>
                                    <td>{e.nom}</td>
                                    <td>{e.prenom}</td>
                                    <td>{e.adresse}</td>
                                    <td>{e.Telephone}</td>
                                    <td>{e.Filière}</td>
                                    <td>{e.Groupe}</td>
                                    <td>
                                        <Link to={`/DeleteStagiaire/${e.idstg}`}>
                                            <button className="btn btn-danger">Delete</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/UpdateStagiaire/${e.idstg}`}>
                                            <button className="btn btn-warning">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-3">
                    <Link className="btn btn-primary me-2" to="/AddStagiaire">Add Stagiaire</Link>
                    <Link className="btn btn-secondary me-2" to="/Search">Rechercher Stagiaire</Link>
                    <Link className="btn btn-info" to="/authentification">Authentification</Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p className="mb-0">© 2024 My Application. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}

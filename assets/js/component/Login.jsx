import axios from 'axios';
import React, { useState } from 'react';

const Login = props => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const token = await axios
                .post("http://localhost:8000/api/login_check", credentials)
                .then(response => response.data.token);

            setError("");

            window.localStorage.setItem("authToken", token);

            axios.defaults.headers["Authorization"] = "Bearer " + token;
        } catch (error) {
            setError("Aucun compte ne possède cette adresse");
        }
    }

    return <div>
        <h2>Connextion à l'application</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input
                    type="email"
                    placeholder="Email"
                    name="username"
                    className={"form-control" + (error && " is-invalid")}
                    value={credentials.username}
                    onChange={handleChange}
                />
                {error &&
                    <p className="invalid-feedback">
                        {error}
                    </p>
                }
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe : </label>
                <input
                    type="password"
                    placeholder="Email"
                    name="password"
                    className="form-control"
                    value={credentials.password}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-secondary">Connexion</button>
            </div>
        </form>
    </div>
};

export default Login;

import axios from 'axios';
import React, { useState } from 'react';

const Registration = ({ history }) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const handleChange = ({ currentTarget }) => {

        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.post("http://localhost:8000/api/users", user);

        history.replace("/login");
    }

    return <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="firstname">Nom : </label>
            <input type="text" className="form-control" name="firstName" placeholder="Your First Name" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="lastname">Prénom : </label>
            <input type="text" className="form-control" name="lastName" placeholder="Your Last Name" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="email">Adresse E-mail : </label>
            <input type="email" className="form-control" name="email" placeholder="Your email" onChange={handleChange} />
        </div>

        <div className="form-group">
            <label htmlFor="password">Mot de passe : </label>
            <input type="password" className="form-control" name="password" placeholder="Your password" onChange={handleChange} />
        </div>
        <div className="form-check">
            <button type="submit" className="btn btn-primary">
                Créer
            </button>
        </div>

    </form>
        ;


}

export default Registration;
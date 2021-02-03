import React, { useEffect, useState } from 'react';
import axios from "axios"

const Model = props => {

    const [models, setModels] = useState('');

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/documents")
            .then(response => response.data['hydra:member'])
            .then(data => setModels(data));
    }, [])

    return <div className="row">

        {
            models && models.map(model =>
            (
                <div className="col-sm-3 m-3 d-flex align-items-stretch">
                    <div className="card " key={model.id} >
                        <div className="card-body">
                            <h5 className="card-title">{model.name}</h5>
                            <p className="card-text">
                                {model.type}
                            </p>
                            <a href="#" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>
            )
            )
        }

    </div>
}

export default Model;

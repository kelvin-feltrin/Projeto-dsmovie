import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateImageURL } from 'utils/validate';
import './styles.css';

function RegistrationMovie () {

    const navigate = useNavigate();

    const [, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movieregistration`)
            .then(response => {
                setMovie(response.data)
            })
    });
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const title = (event.target as any).title.value;
        const image = (event.target as any).image.value;

        if (!validateImageURL(image)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/movieregistration',
            data: {
                title: title,
                score: 0,
                count: 0,
                image: image
            }
        }

        axios(config).then(response => {
            navigate("/");
        });
    }

    return (

        <div className="dsmovie-form-container">
            <div className="dsmovie-card-bottom-container">
                <h3>Cadastrar novo filme</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="title">Informe o nome do filme</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="image">Informe o link da imagem do filme</label>
                        <input type="text" className="form-control" id="image" />
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to={"/"}>
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default RegistrationMovie;
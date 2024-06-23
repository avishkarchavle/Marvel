// src/components/MarvelComics.js

import React, { useState, useEffect } from 'react';
import { getMarvelComics } from '../api/marvel';
import './MarvelComics.css';

const MarvelComics = () => {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        const fetchComics = async () => {
            const data = await getMarvelComics();
            setComics(data);
        };

        fetchComics();
    }, []);

    return (
        <div className="marvel-comics">
            <h1 className="section-title">Marvel Comics</h1>
            <div className="comics-container">
                {comics.map(comic => (
                    <div key={comic.id} className="comic-item">
                        <h2>{comic.title}</h2>
                        {comic.thumbnail && (
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={comic.title}
                                width="200"
                                className="comic-image"
                            />
                        )}
                        <p>{comic.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarvelComics;

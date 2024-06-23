// src/components/MarvelCreators.js

import React, { useState, useEffect } from 'react';
import { getMarvelCreators } from '../api/marvel';
import './MarvelCreators.css';

const MarvelCreators = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const data = await getMarvelCreators();
            setCreators(data);
        };

        fetchCreators();
    }, []);

    return (
        <div className="marvel-creators">
            <h1>Marvel Creators</h1>
            <ul className="creators-list">
                {creators.map(creator => (
                    <li key={creator.id} className="creator-item">
                        <h2>{creator.firstName}</h2>
                        <img
                            src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                            alt={creator.fullName}
                            width="200"
                            className="creator-image"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarvelCreators;

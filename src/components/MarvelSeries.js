// src/components/MarvelSeries.js

import React, { useState, useEffect } from 'react';
import { getMarvelSeries } from '../api/marvel';
import './MarvelSeries.css';

const MarvelSeries = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchSeries = async () => {
            const data = await getMarvelSeries();
            setSeries(data);
        };

        fetchSeries();
    }, []);

    return (
        <div className="marvel-series">
            <h1>Marvel Series</h1>
            <ul className="series-list">
                {series.map(item => (
                    <li key={item.id} className="series-item">
                        <h2>{item.title}</h2>
                        <img
                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            alt={item.title}
                            width="200"
                            className="series-image"
                        />
                        <p>{item.description}</p>
                        <p><strong>Start Year:</strong> {item.startYear}</p>
                        <p><strong>End Year:</strong> {item.endYear}</p>
                        <p><strong>Rating:</strong> {item.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarvelSeries;

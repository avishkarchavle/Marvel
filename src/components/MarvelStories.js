// src/components/MarvelStories.js

import React, { useState, useEffect } from 'react';
import { getMarvelStories } from '../api/marvel';
import './MarvelStories.css';

const MarvelStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            const data = await getMarvelStories();
            setStories(data);
        };

        fetchStories();
    }, []);

    return (
        <div className="marvel-stories">
            <h1>Marvel Stories</h1>
            <ul className="stories-list">
                {stories.map(story => (
                    <li key={story.id} className="story-item">
                        <h2>{story.title}</h2>
                        {story.thumbnail && (
                            <img
                                src={`${story.thumbnail.path}.${story.thumbnail.extension}`}
                                alt={story.title}
                                width="200"
                                className="story-image"
                            />
                        )}
                        <p>{story.description}</p>
                        <p><strong>Type:</strong> {story.type}</p>
                        <p><strong>Modified:</strong> {new Date(story.modified).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarvelStories;

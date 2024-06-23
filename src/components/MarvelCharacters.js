import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../api/marvel';
import './MarvelCharacters.css';

const MarvelCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await getAllCharacters();
            setCharacters(data);
        };

        fetchCharacters();
    }, []);

    return (
        <div className="marvel-characters">
            <h1 className="section-title">Marvel Characters</h1>
            <div className="characters-container">
                {characters.map(character => (
                    <div key={character.id} className="character-item">
                        <h2>{character.name}</h2>
                        {character.thumbnail && (
                            <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                                width="200"
                                className="character-image"
                            />
                        )}
                        <p>{character.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarvelCharacters;

// src/components/MarvelEvents.js

import React, { useState, useEffect } from 'react';
import { getMarvelEvents } from '../api/marvel';
import './MarvelEvents.css';

const MarvelEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getMarvelEvents();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    return (
        <div className="marvel-events">
            <h1>Marvel Events</h1>
            <ul className="events-list">
                {events.map(event => (
                    <li key={event.id} className="event-item">
                        <h2>{event.title}</h2>
                        <img
                            src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                            alt={event.title}
                            width="200"
                            className="event-image"
                        />
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarvelEvents;

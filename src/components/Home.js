import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {


    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Marvel Universe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/characters">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/comics">Comics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/series">Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stories">Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/creators">Creators</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div className="content">
                <h1>Welcome to Marvel Universe</h1>
                <p id='white'>Explore Marvel characters and comics!</p>

                <div className="additional-images">
                    <img src="https://cdn.marvel.com/content/1x/ironman_hom.jpg" alt="Iron Man" className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/thorult01.jpg" alt="Thor" className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/capamericamc2_442.jpg" alt="Captain America" className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/msmarvel_houseofm.jpg" alt="Captain Marvel" className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/1602_blackwidow442.jpg" alt="Black Widow" className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/acotilletta2--hulk_%28house_of_m%29_442.jpg" alt="Hulk" className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/018hcb_com_cut_dsk_01.jpg" alt="Hawkeye " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/010ant-com-character-imgonleft-desktop.jpg" alt="Ant-Man " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/311tch_com_crd_01.png" alt="Black Panther " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/spider_hom.jpg" alt="Spider Man " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/021slq_com_cut_dsk_01_0.jpg" alt="Star Lord " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/012scw_com_cut_dsk_02_0.jpg" alt="Scarlet Witch " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/023rra_ons_crd_04.jpg" alt="Rocket " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/024grt_ons_cut_dsk_01_1.jpg" alt="Groot " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/ultra-vision.jpg" alt="Vision " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/009drs_com_cut_dsk_03.jpg" alt="Doctor Strange " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/ultwolv.jpg" alt="Wolverine " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/036dpl_com_crd_01.jpg" alt="Deadpool " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/017lok_com_cut_dsk_01.jpg" alt="Loki " className="additional-image" />
                    <img src="https://cdn.marvel.com/content/1x/019tha_com_cut_dsk_02_0.jpg" alt="Thanos" className="additional-image" />
                </div>
            </div>
        </div>
    );
};

export default Home;

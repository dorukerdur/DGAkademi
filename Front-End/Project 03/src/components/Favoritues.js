import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Favoritues.css";

export default function Favoritues (){
    
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const { id } = useParams()
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    return(
        <div className="favoritues">

            <div className="mobile-status-favoritues">

                <div className="mobile-status-top-favoritues">

                    <div className="mobile-status-time-favoritues">
                        <h3>9:41</h3>
                    </div>
                    <div className="mobile-status-condition-favoritues">
                        <img src={window.location.origin + "/images/Cellular Connection.svg"} alt="Cellular Connection" />
                        <img src={window.location.origin + "/images/Wifi.svg"} alt="Wifi" />
                        <img src={window.location.origin + "/images/Battery.svg"} alt="Battery" />
                    </div>

                </div>

                <div className="menu-favoritues">
                    
                    <div className="menu-top-favoritues">
                        
                        <div className="menu-icon-favoritues">
                            <img src={window.location.origin + "/images/Menu.svg"} alt="Menu" />
                        </div>
                        <div className="menu-title-favoritues">
                            <h3>Dgcinema</h3>
                        </div>
                        <div className="menu-notification-favoritues">
                            <img src={window.location.origin + "/images/Notif.svg"} alt="Notification" />
                        </div>
                        <div className="menu-for-pc-favoritues">
                            <Link to ="/favoritues">
                            <img src="images/Bookmark for Pc.svg" alt="Bookmark Pc" />
                            </Link>
                            <img src="images/Notification Pc.svg" alt="Notification Pc" />
                            <img src="images/Avatar.png" alt="Avatar" />
                        </div>
                    </div>

                    <div className="popular-favoritues">
                        <div className="title-favoritues">
                            <div className="title-popular-favoritues">Favoriler</div>
                            <img src={window.location.origin + "/images/Button See More.svg"} alt="Button See More" />
                        </div>


                    </div>

                    <div className="menu-bottom-favoritues">
                        <Link to ="/">
                            <div className="menu-home-favoritues">
                                <img src={window.location.origin + "/images/Home for Favoritues.svg"} alt="Home" />
                            </div>
                        </Link>
                        <Link to="/favoritues">
                            <div className="menu-bookmark-favoritues">
                                <img src={window.location.origin + "/images/Bookmark for Favoritues.svg"} alt="Bookmark" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="mobile-status-bottom-favoritues">
                    <div className="mobile-status-indicator-favoritues"></div>
                </div>
            </div>

        </div>
    )    
}
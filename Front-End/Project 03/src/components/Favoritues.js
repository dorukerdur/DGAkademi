import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Favoritues.css";

export default function Favoritues (){
    
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [favoritues, setFavoritues] = useState([])

    useEffect(() => {
        const movieFavoritues = JSON.parse(
            localStorage.getItem('react-movie-app-favoritues')
        );
        if(movieFavoritues) {
            setFavoritues(movieFavoritues);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favoritues', JSON.stringify(items));
    };


    const removeFavorituesMovie = (movie) => {
        const newFavorituesList = favoritues.filter(
            (favorite) => favorite.id !== movie.id);

        setFavoritues(newFavorituesList);
        saveToLocalStorage(newFavorituesList);
    };

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
                        <Link to={"/"}>
                        <div className="menu-title-favoritues">
                            <h3>Dgcinema</h3>
                        </div>
                        </Link>
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

                        <div className="movie-list-favoritues">
                            {favoritues.map(movie => {
                                return(
                                    <div className="movie-favoritues" key={movie.id}>
                                        <img className ="movie-image-favoritues" src={`${imagePath}${movie.image}`} alt={movie.title}/>
                                    <div className="movie-info-favoritues">
                                        <div className="movie-title-favoritues">{movie.title}</div>
                                        <div className="movie-imdb-favoritues">
                                            <img src="images/Star.svg" alt="Star" />
                                            <span className="movie-vote-favoritues">{movie.imdb}/10 IMDb</span>
                                        </div>
                                    
                                    <div className="movie-date-favoritues">
                                        <span className="movie-release-date-favoritues">{movie.releaseDate}</span>
                                    </div>
                                    <div className ="movie-list-delete-favoritues" onClick={() => removeFavorituesMovie(movie)} >
                                    <img src={window.location.origin + "/images/Delete Favoritues.svg"} alt="Delete Favoritues"/>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
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
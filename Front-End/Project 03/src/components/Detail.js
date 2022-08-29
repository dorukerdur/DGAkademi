import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Detail.css";

export default function Detail () {

    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [favoritues, setFavoritues] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c924ef35363db87a24b0e89513ddb067&language=tr`)
        .then(response => response.json())
        .then(data => {
            const {title, poster_path, release_date ,overview, vote_average, original_language} = data;
            const movie = {
                id,
                title,
                image: `${imagePath}${poster_path}`,
                sinopse: overview,
                releaseDate: release_date,
                imdb: vote_average,
                language: original_language
            }
            setMovie(movie);
        })
    }, [id])

    const addFavorituesMovie = (movie) => {
        const newFavorituesList = [...favoritues, movie];
        setFavoritues(newFavorituesList);
    }

    return (
        <div className="detail">

            <div className="mobile-status-detail">

                <div className="mobile-status-top-detail">

                    <div className="mobile-status-time-detail">
                        <h3>9:41</h3>
                    </div>
                    <div className="mobile-status-condition-detail">
                        <img src={window.location.origin + "/images/Cellular Connection.svg"} alt="Cellular Connection" />
                        <img src={window.location.origin + "/images/Wifi.svg"} alt="Wifi" />
                        <img src={window.location.origin + "/images/Battery.svg"} alt="Battery" />
                    </div>

                </div>

                <div className="menu-detail">

                    <div className="menu-top-detail">
                        <Link to="/">
                        <div className="menu-go-back-detail">
                            <img src={window.location.origin + "/images/Back.svg"} alt="Back" />
                        </div>
                        </Link>
                        <div className="menu-three-dot-detail">
                            <img src={window.location.origin + "/images/Three Dot.svg"} alt="ThreeDot" />
                        </div>

                        <div className="menu-for-pc">
                            <Link to ="/favoriues">
                            <img src={window.location.origin + "/images/Bookmark for Pc.svg"} alt="Bookmark Pc" />
                            </Link>
                            <img src={window.location.origin + "/images/Notification Pc.svg"} alt="Notification Pc" />
                            <img src={window.location.origin + "/images/Avatar.png"} alt="Avatar" />
                        </div>
                    </div>

                    <div className="movie-list-detail">
                        <img className="movie-list-detail-image" src={movie.image} alt={movie.title}/>
                        <div className="movie-list-title-detail">
                            <h1>{movie.title}</h1>
                            <div className="movie-list-add-to-favoritues-details">
                            <img src={window.location.origin + "/images/Bookmark for Details.svg"} alt="Back" />
                            </div>
                        </div>
                        <div className="movie-list-imdb-detail">
                            <img src={window.location.origin + "/images/Star.svg"} alt="Star" />
                            <span className="movie-vote-detail">{movie.imdb}/10 IMDb</span>
                        </div>
                        <div className="movie-list-general-information-detail">
                            <div className="movie-list-release-date-detail">
                                <span className="movie-date-static-detail">Çıkış Tarihi</span>
                                <span className="movie-date-detail">{movie.releaseDate}</span>
                            </div>
                            <div className="movie-list-original-language">
                                <span className="movie-list-language-static-detail">Dil</span>
                                <span className="movie-list-language-detail">{movie.language}</span>
                            </div>
                        </div>
                        <div className="movie-list-overview-detail">
                                <span className="movie-list-overview-aciklama">Açıklama</span>
                                <span className="movie-list-overview-sinopse-detail">{movie.sinopse}</span>
                        </div>
                    </div>

                </div>

                <div className="mobile-status-bottom-detail">
                    <div className="mobile-status-indicator-detail"></div>
                </div>
            </div>

        </div>
    )

}

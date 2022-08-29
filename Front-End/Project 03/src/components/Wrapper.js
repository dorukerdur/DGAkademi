import React from 'react'
import { useEffect, useState } from 'react';
import "./Wrapper.css";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Wrapper() {

  const imagePath = 'https://image.tmdb.org/t/p/w500';

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedMovie, setSelectedMovie] = useState([])
  


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c924ef35363db87a24b0e89513ddb067&language=tr`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c924ef35363db87a24b0e89513ddb067&language=tr`)
    .then(genre => genre.json())
    .then(result => {
        const genres = result.genres.reduce((genres,gen) => {
          const {id, name} = gen
          genres[id] = name
          return genres
          }, [])
          setGenres(genres)
        })
  }, [])

  return (
    <div className="wrapper">

        <div className="mobile-status">

            <div className="mobile-status-top">

              <div className="mobile-status-time">
                <h3>9:41</h3>
              </div>
              <div className="mobile-status-condition">
                <img src="images/Cellular Connection.svg" alt="Cellular Connection" />
                <img src="images/Wifi.svg" alt="Wifi" />
                <img src="images/Battery.svg" alt="Battery" />
              </div>

            </div>

            <div className="menu">
          
              <div className="menu-top">
                <div className="menu-icon">
                  <img src="images/Menu.svg" alt="Menu" />
                </div>
                <div className="menu-title">
                  <h3>Dgcinema</h3>
                </div>
                <div className="menu-notification">
                  <img src="images/Notif.svg" alt="Notification" />
                </div>
                <div className="menu-for-pc">
                  <img src="images/Bookmark for Pc.svg" alt="Bookmark Pc" />
                  <img src="images/Notification Pc.svg" alt="Notification Pc" />
                  <img src="images/Avatar.png" alt="Avatar" />
                </div>
              </div>

              <div className="popular">
                <div className="title">
                  <div className="title-popular">Popüler</div>
                  <img src="images/Button See More.svg" alt="Button See More" />
                </div>
                <div className="movie-list">
                  {movies.map(movie => {
                    return (
                      <Link to={`/detail/${movie.id}`}>
                      <div className="movie" key={movie.id}>
                          <img className ="movie-image" src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
                        <div className="movie-info">
                          <div className="movie-title">{movie.title}</div>
                          <div className="movie-imdb">
                            <img src="images/Star.svg" alt="Star" />
                            <span className="movie-vote">{movie.vote_average}/10 IMDb</span>
                          </div>
                          <div className="movie-categories">
                            <span className="movie-genre">
                              {
                                movie.genre_ids.map(id => {
                                  return <span>{genres[id]}</span>
                                })
                              }
                            </span>
                          </div>
                          <div className="movie-date">
                            <span className="movie-release-date">{movie.release_date}</span>
                          </div>
                        </div>
                      </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="menu-bottom">
                  <div className="menu-home">
                    <img src="images/Bookmark Home.svg" alt="Home" />
                  </div>
                  <Link to="/favoritues">
                    <div className="menu-bookmark">
                      <img src="images/Bookmark.svg" alt="Bookmark" />
                    </div>
                 </Link>
              </div>
           </div>

            <div className="mobile-status-bottom">
              <div className="mobile-status-indicator"></div>
            </div>
        </div>
        
    </div>
  )
}
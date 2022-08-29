import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Favoritue.css";

export default function Favoritues (){
    
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const { id } = useParams()
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])



    
}
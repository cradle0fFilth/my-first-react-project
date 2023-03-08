import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//http://www.omdbapi.com/?i=tt3896198&apikey=6930b428
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6930b428';

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("avengers");
    }, []);

    return (
        <div className="app">
            <h1>MoviesLand</h1>

            <div className="search">
                <input
                    placeholder="Search for a movie..."
                    value="Superman"
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search-icon"
                    onClick={() => { }}
                />
            </div>
            {
                movies?.length > 0 ? (
                <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))
                    }
                </div>) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;


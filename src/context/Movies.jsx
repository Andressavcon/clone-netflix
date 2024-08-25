/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

const TOKEN = import.meta.env.VITE_TMDB_API_KEY;

if (!TOKEN) {
	console.error(
		"Token da API do TMDB não está definido. Verifique o arquivo .env."
	);
}

export const MoviesProvider = (props) => {
	const [moviesByGenre, setMoviesByGenre] = useState([]);
	const [genres, setGenres] = useState([]);
	const [error, setError] = useState(null);
	const [searchResults, setSearchResults] = useState([]);

	const fetchGenres = async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/genre/movie/list",
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
					params: {
						language: "pt-BR",
					},
				}
			);
			setGenres(response.data.genres.slice(0, 5));
		} catch (error) {
			console.error("Erro ao buscar os gêneros: ", error);
			setError("Erro ao buscar os gêneros");
		}
	};

	const fetchMoviesByGenre = async (genreId) => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/discover/movie",
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
					params: {
						with_genres: genreId,
						language: "pt-BR",
						page: 1,
					},
				}
			);
			return response.data.results;
		} catch (error) {
			console.error("Erro ao buscar filmes por gênero: ", error);
			setError("Erro ao buscar filmes por gênero");
			return [];
		}
	};

	const fetchAllMoviesByGenres = async (genreList) => {
		const allMovies = [];
		for (const genre of genreList) {
			const movies = await fetchMoviesByGenre(genre.id);
			allMovies.push(movies);
		}
		setMoviesByGenre(allMovies);
	};

	const searchMovies = async (query) => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/search/movie",
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
					params: {
						query,
						language: "pt-BR",
						page: 1,
					},
				}
			);
			setSearchResults(response.data.results);
		} catch (error) {
			console.error("Erro ao buscar filmes: ", error);
			setError("Erro ao buscar filmes");
			setSearchResults([]);
		}
	};

	useEffect(() => {
		fetchGenres();
	}, []);

	useEffect(() => {
		if (genres.length > 0) {
			fetchAllMoviesByGenres(genres);
		}
	}, [genres]);

	return (
		<MoviesContext.Provider
			value={{ moviesByGenre, genres, error, searchMovies, searchResults }}
		>
			{props.children}
		</MoviesContext.Provider>
	);
};

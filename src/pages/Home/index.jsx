import { useContext, useState } from "react";
import styled from "styled-components";

import { MoviesContext } from "../../context/Movies";
import { Header } from "../../components/Header";
import GenreCarousel from "../../components/GenreCarousel";
import MovieDetailModal from "../../components/MovieModal";

const Main = styled.div`
	background-color: rgb(20, 20, 20);
`;

const Container = styled.div`
	color: var(--text-white);
	width: 95%;
	margin: 0 auto;
`;

const BannerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 90vh;
	overflow: hidden;
`;

const BannerImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
`;

const BannerContent = styled.div`
	margin: 3rem;
	position: absolute;
	bottom: 20px;
	width: 30%;
	color: var(--text-white);
	padding: 20px;
	text-align: justify;
`;

const BannerTitle = styled.h1`
	margin: 0;
	font-size: 2em;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const BannerDescription = styled.p`
	margin: 10px 0 0;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const BannerButtons = styled.div`
	margin: 2rem 0;
	display: flex;
	gap: 1rem;

	button {
		border-radius: 4px;
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		font-weight: 700;
		display: flex;
		gap: 0.5rem;
		cursor: pointer;
		transition: opacity 0.3s ease;

		&:hover {
			opacity: 0.7;
		}
	}

	.btn1 {
		background-color: var(--text-white);
		color: #000;
	}

	.btn2 {
		background-color: rgba(77, 77, 78, 0.76);
		color: var(--text-white);
	}
`;

export const Home = () => {
	const { moviesByGenre, genres, error } = useContext(MoviesContext);
	const [selectedMovie, setSelectedMovie] = useState(null);

	if (error) {
		return <p>{error}</p>;
	}

	const allMovies = moviesByGenre.flat();
	const randomMovie = allMovies[Math.floor(Math.random() * allMovies.length)];

	const imageUrl = randomMovie?.backdrop_path
		? `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`
		: "";

	const handleMovieClick = (movie) => setSelectedMovie(movie);
	const handleCloseModal = () => setSelectedMovie(null);

	return (
		<Main>
			<Header />
			<BannerContainer>
				{randomMovie && (
					<>
						<BannerImage style={{ backgroundImage: `url(${imageUrl})` }} />
						<BannerContent>
							<BannerTitle>{randomMovie.title}</BannerTitle>
							<BannerDescription>{randomMovie.overview}</BannerDescription>
							<BannerButtons>
								<button className="btn1">
									<i className="fa-solid fa-play"></i>Assistir
								</button>
								<button className="btn2">
									<i className="fa-solid fa-circle-info"></i>Mais informações
								</button>
							</BannerButtons>
						</BannerContent>
					</>
				)}
			</BannerContainer>
			<Container>
				{genres.length > 0 &&
					moviesByGenre.length > 0 &&
					genres.map((genre, index) => (
						<GenreCarousel
							key={genre.id}
							genre={genre}
							movies={moviesByGenre[index] || []}
							onMovieClick={handleMovieClick}
						/>
					))}
			</Container>
			{selectedMovie && (
				<MovieDetailModal movie={selectedMovie} onClose={handleCloseModal} />
			)}
		</Main>
	);
};

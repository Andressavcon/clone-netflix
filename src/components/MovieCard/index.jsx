/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 8px;
	overflow: hidden;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

const Poster = styled.img`
	width: 100%;
	height: auto;
`;

const MovieCard = ({ movie }) => {
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<Card>
			<Poster src={imageUrl} alt={movie.title} />
		</Card>
	);
};

export default MovieCard;

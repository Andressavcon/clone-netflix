/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
	margin-bottom: 20px;
`;

const CarouselTitle = styled.h2`
	margin: 0;
	font-size: 1.5em;
`;

const CarouselWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;

const Carousel = styled.div`
	display: flex;
	transition: transform 0.3s ease;
`;

const MovieCard = styled.div`
	width: 220px;
	height: 125px;
	background: #333;
	color: var(--text-white);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		background: #444;
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const MovieTitle = styled.div`
	position: absolute;
	bottom: 10px;
	left: 10px;
	right: 10px;
	color: var(--text-white);
	font-size: 0.9em;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
	padding: 5px;
	box-sizing: border-box;
	text-align: center;
`;

const Arrow = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.5);
	color: var(--text-white);
	border: none;
	padding: 10px;
	cursor: pointer;
	z-index: 1;

	&:hover {
		background: rgba(0, 0, 0, 0.8);
	}

	${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
`;

const GenreCarousel = ({ genre, movies, onMovieClick }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerPage = 5;
	const totalItems = movies.length;
	const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

	const handleNext = () => {
		if (currentIndex < maxIndex) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<CarouselContainer>
			<CarouselTitle>{genre.name}</CarouselTitle>
			<CarouselWrapper>
				<Arrow
					direction="left"
					onClick={handlePrev}
					disabled={currentIndex === 0}
				>
					&#10094;
				</Arrow>
				<Carousel
					style={{
						transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
						width: `${totalItems * 220 + (totalItems - 1) * 10}px`,
					}}
				>
					{movies.map((movie) => (
						<MovieCard key={movie.id} onClick={() => onMovieClick(movie)}>
							<MoviePoster
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
							/>
							<MovieTitle>{movie.title}</MovieTitle>
						</MovieCard>
					))}
				</Carousel>
				<Arrow
					direction="right"
					onClick={handleNext}
					disabled={currentIndex === maxIndex}
				>
					&#10095;
				</Arrow>
			</CarouselWrapper>
		</CarouselContainer>
	);
};

export default GenreCarousel;

/* eslint-disable react/prop-types */
import styled from "styled-components";

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;

const ModalContent = styled.div`
	background-color: rgb(24, 24, 24);
	width: 80%;
	margin-top: 5rem;
	max-width: 800px;
	border-radius: 0.5rem;
	color: var(--text-white);
	position: relative;
`;

const Img = styled.img`
	width: 100%;
	border-radius: 0.5rem 0.5rem 0 0;
`;

const Title = styled.div`
	position: absolute;
	width: 18rem;
	margin-left: 2rem;
	top: 50%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const MovieTitle = styled.span`
	font-size: 2rem;
	font-weight: 700;
`;

const Buttons = styled.div`
	display: flex;
	gap: 1rem;
`;

const Button = styled.button`
	background-color: rgb(24, 24, 24);
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	border: 1px solid #ffffff89;
	color: var(--text-white);
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: 0.9;

	&:hover {
		opacity: 1;
	}
`;

const PlayButton = styled.button`
	width: 8rem;
	padding: 0.8rem 1rem;
	border-radius: 4px;
	font-size: 1.2rem;
	font-weight: 700;
	background-color: var(--text-white);
	color: rgb(24, 24, 24);
	opacity: 1;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

const Content = styled.p`
	padding: 2rem;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	color: rgb(24, 24, 24);
	font-size: 2rem;
	cursor: pointer;
`;

const MovieDetailModal = ({ movie, onClose }) => {
	if (!movie) return null;

	const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>
					<i className="fa-solid fa-circle-xmark"></i>
				</CloseButton>
				<Img src={imageUrl} alt={movie.title} />
				<Title>
					<MovieTitle>{movie.title}</MovieTitle>
					<Buttons>
						<PlayButton>
							<i className="fa-solid fa-play"></i>Assistir
						</PlayButton>
						<Button>
							<i className="fa-solid fa-plus"></i>
						</Button>
						<Button>
							<i className="fa-solid fa-thumbs-up"></i>
						</Button>
					</Buttons>
				</Title>
				<Content>{movie.overview}</Content>
			</ModalContent>
		</ModalOverlay>
	);
};

export default MovieDetailModal;

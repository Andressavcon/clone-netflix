import { useContext } from "react";
import styled from "styled-components";

import { MoviesContext } from "../../context/Movies";
import MovieCard from "../../components/MovieCard";
import { Header } from "../../components/Header";

const Main = styled.div`
	background-color: rgb(20, 20, 20);
	color: var(--text-white);
	padding-top: 7rem;
`;

const Title = styled.h1`
	padding: 0 0 3rem 4rem;
`;

const ResultsContainer = styled.div`
	width: 95%;
	padding-bottom: 2rem;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`;

const NoResults = styled.div`
	height: 100vh;
	padding-left: 4rem;
	color: #999;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchResults = () => {
	const { searchResults } = useContext(MoviesContext);

	return (
		<Main>
			<Header />
			<Title>Resultados da Busca</Title>
			{searchResults.length > 0 ? (
				<ResultsContainer>
					{searchResults.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</ResultsContainer>
			) : (
				<NoResults>Nenhum resultado encontrado</NoResults>
			)}
		</Main>
	);
};

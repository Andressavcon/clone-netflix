import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import IconNetflix from "../IconNetflix";
import { MoviesContext } from "../../context/Movies";

const HeaderNav = styled.header`
	position: fixed;
	top: 0;
	z-index: 1;
	background-color: #00000046;
	height: 10vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 95%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

const NavLeft = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;

	ul {
		font-size: 0.9rem;
		display: flex;
		gap: 1.5rem;
	}
`;

const NavRight = styled.div`
	width: 15rem;
	background-color: #1d1d1d;
	border: 1px solid var(--text-white);
`;

const Form = styled.form`
	display: flex;
	align-items: center;
`;

const SearchInput = styled.input`
	padding: 0.4rem;
	border: none;
	background-color: #1d1d1d;
	color: var(--text-white);
	&:focus {
		outline: none;
	}
`;

const SearchButton = styled.button`
	background-color: none;
	color: var(--text-white);
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;

	i {
		font-size: 1.2rem;
	}
`;

export const Header = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { searchMovies } = useContext(MoviesContext);
	const navigate = useNavigate();

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		searchMovies(searchTerm);
		navigate("/search");
	};

	return (
		<HeaderNav>
			<Container>
				<NavLeft>
					<IconNetflix fill="var(--bkg-red)" height="25" />
					<ul>
						<li>
							<Link to="/home">Início</Link>
						</li>
						<li>
							<a>Séries</a>
						</li>
						<li>
							<a>Filmes</a>
						</li>
						<li>
							<a>Bombando</a>
						</li>
						<li>
							<a>Minha Lista</a>
						</li>
						<li>
							<a>Navegar por idiomas</a>
						</li>
					</ul>
				</NavLeft>
				<NavRight>
					<Form onSubmit={handleSearchSubmit}>
						<SearchButton type="submit">
							<i className="fa-solid fa-magnifying-glass"></i>
						</SearchButton>
						<SearchInput
							type="text"
							placeholder="Pesquisar..."
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</Form>
				</NavRight>
			</Container>
		</HeaderNav>
	);
};

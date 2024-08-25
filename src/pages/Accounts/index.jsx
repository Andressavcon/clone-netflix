import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Img1 from "../../img/acc-c1.png";
import Img2 from "../../img/acc-c2.png";
import Img3 from "../../img/acc-kids.png";

const Main = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;

	h1 {
		font-size: 3rem;
		color: var(--text-white);
	}
`;

const Title = styled.h3`
	color: var(--text-gray);
	font-weight: 100;
`;

const Cards = styled.div`
	display: flex;
	gap: 2rem;
`;

const Card = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	background: none;
	border: none;
	cursor: pointer;
`;

const Img = styled.img`
	width: 10rem;
	height: 10rem;
	border-radius: 0.5rem;

	&:hover {
		border: 2px solid var(--text-white);
	}
`;

const ButtonAdd = styled.a`
	width: 10rem;
	height: 10rem;
	border-radius: 0.5rem;
	color: var(--text-gray);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		border: 2px solid var(--text-white);
	}

	i {
		font-size: 6rem;
	}
`;

const Button = styled.button`
	color: var(--text-gray);
	font-size: 1.2rem;
	border: 2px solid var(--text-gray);
	padding: 0.5rem 1rem;
	margin-top: 2rem;
	background: none;
	cursor: pointer;
`;

export const Accounts = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/home");
	};

	return (
		<Main>
			<h1>Quem está assistindo?</h1>
			<Cards>
				<Card>
					<Img src={Img1} alt="" />
					<Title>Adm</Title>
				</Card>
				<Card onClick={handleClick}>
					<Img src={Img2} alt="" />
					<Title>Andressa</Title>
				</Card>
				<Card>
					<Img src={Img3} alt="" />
					<Title>Kids</Title>
				</Card>
				<Card>
					<ButtonAdd href="#">
						<i className="fa-solid fa-circle-plus"></i>
					</ButtonAdd>
					<Title>Adicionar perfil</Title>
				</Card>
			</Cards>
			<Button>Gerenciar perfis</Button>
		</Main>
	);
};

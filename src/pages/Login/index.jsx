import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import IconNetflix from "../../components/IconNetflix";
import IconErrors from "../../components/IconError";
import bkgImage from "../../img/bkg.jpg";

const Main = styled.main`
	height: 100vh;
	max-width: 100%;
	position: relative;
`;

const BackgroundImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const Container = styled.div`
	width: 980px;
	margin: 0 auto;
	position: relative;
	z-index: 2;
`;

const Header = styled.header`
	height: 92px;
	padding: 24px 32px;
	display: flex;
	align-items: center;
`;

const Form = styled.form`
	width: 450px;
	margin: 0 auto;
	padding: 48px 68px;
	background-color: rgba(0, 0, 0, 0.7);
	color: var(--text-white);
	border-radius: 4px;
`;

const Title = styled.h1`
	font-size: var(--fontSize-2);
	margin-bottom: 28px;
`;

const Input = styled.input`
	background-color: rgba(22, 22, 22, 0.7);
	color: var(--text-white);
	width: 100%;
	height: 56px;
	border-radius: 4px;
	padding: 16px;
	border: 1px solid rgba(128, 128, 128, 0.7);
	font-size: 16px;
`;

const FormsContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;

const Button = styled.button`
	background-color: ${(props) =>
		props.primary ? "var(--bkg-red)" : "#333333dd"};
	color: var(--text-white);
	height: 40px;
	width: 100%;
	border-radius: 4px;
	font-size: 13px;
	border: none;
	cursor: pointer;
`;

const Text = styled.p`
	color: #ffffffb3;
`;

const Text2 = styled.p`
	margin-top: 16px;
	color: #8c8c8c;
	font-size: 13px;
`;

const TextError = styled.div`
	width: 100%;
	color: var(--bkg-red);
	font-size: 13px;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 4px;
`;

const Remember = styled.div`
	display: flex;
	gap: 12px;
	padding-top: 20px;
	padding-bottom: 16px;
`;

const Footer = styled.footer`
	height: 160px;
	margin: 72px;
	color: #ffffffb3;
`;

const GridLinks = styled.div`
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	a {
		text-decoration: underline;
		font-size: 13px;
		padding: 16px 0 5px 11px;
	}
`;

export const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();

	const validate = () => {
		const newErrors = {};

		if (!formData.email) {
			newErrors.email = "Informe um email ou número de telefone válido.";
		}

		if (
			!formData.password ||
			formData.password.length <= 4 ||
			formData.password.length >= 60
		) {
			newErrors.password = "A senha deve ter entre 4 e 60 caracteres.";
		}

		return newErrors;
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const validationErrors = validate();

		if (Object.keys(validationErrors).length === 0) {
			setSubmitted(true);
			setErrors({});
			navigate("/accounts");
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<>
			<Main>
				<BackgroundImage src={bkgImage} alt="Background" />
				<Overlay />
				<Container>
					<Header>
						<IconNetflix fill="var(--bkg-red)" width="148" height="40" />
					</Header>
					<Form onSubmit={handleSubmit}>
						<Title>Entrar</Title>
						{submitted && <p>Login bem-sucedido!</p>}
						<FormsContent>
							<Input
								type="text"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email ou número de celular"
							/>
							{errors.email && (
								<TextError>
									<IconErrors fill="var(--bkg-red)" width="16" height="16" />
									{errors.email}
								</TextError>
							)}
							<Input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Senha"
							/>
							{errors.password && (
								<TextError>
									<IconErrors fill="var(--bkg-red)" width="16" height="16" />
									{errors.password}
								</TextError>
							)}
							<Button primary type="submit">
								<strong>Entrar</strong>
							</Button>
							<Text>OU</Text>
							<Button>
								<strong>Usar um código de acesso</strong>
							</Button>
							<p>
								<a href="#">Esqueceu a senha?</a>
							</p>
						</FormsContent>
						<Remember>
							<input type="checkbox" id="checkbox" />
							<label htmlFor="checkbox">Lembre-se de mim</label>
						</Remember>
						<p>
							Novo por aqui?{" "}
							<a href="#">
								<strong>Assine agora.</strong>
							</a>
						</p>
						<Text2>
							Esta página é protegida pelo Google reCAPTCHA para garantir que
							você não é um robô. <a href="#">Saiba mais.</a>
						</Text2>
					</Form>
				</Container>
			</Main>

			<Footer>
				<Container>
					<p>Dúvidas? Ligue 0800 591 2876</p>
					<GridLinks>
						<a href="#">Perguntas frequentes</a>
						<a href="#">Central de Ajuda</a>
						<a href="#">Termos de uso</a>
						<a href="#">Privacidade</a>
						<a href="#">Preferências de cookies</a>
						<a href="#">Informações corporativas</a>
					</GridLinks>
				</Container>
			</Footer>
		</>
	);
};

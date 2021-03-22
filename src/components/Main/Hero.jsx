import styled from "styled-components";
import theme from "../../styles/theme";
import Typewriter from "typewriter-effect";
import CV from "../../documents/CV-Agostina-Arevalo-Jaube.pdf";
function Hero() {
	return (
		<HeroContainer>
			<Title>
				¡Hola! Soy <strong>Agostina</strong>
			</Title>
			<TyperwriterContianer>
				<Typewriter
					options={{
						autoStart: true,
						loop: true,
						cursorClassName: "cursor"
					}}
					onInit={(typewriter) => {
						typewriter
							.typeString('<span style="color:#fff">React JS Developer</span>')
							.pauseFor(1500)
							.deleteAll()
							.typeString(
								'<span style="color:#fff">Frontend Web Developer</span>'
							)
							.pauseFor(1500)
							.deleteAll()
							.deleteAll()
							.start();
					}}
				/>
			</TyperwriterContianer>

			<IconsContainer>
				<a
					href="https://github.com/AgostinaArevaloJaube"
					target="_blank"
					rel="noopener noreferrer"
					title="Ir a Github de Agostina Arevalo Jaube"
				>
					<i className="fab fa-github-square icons" />
				</a>

				<a
					href="https://www.linkedin.com/in/agostinaarevalojaube/"
					target="_blank"
					rel="noopener noreferrer"
					title="Ir a LinkedIn de Agostina Arevalo Jaube"
				>
					<i className="fab fa-linkedin icons" />
				</a>

				<a
					href="mailto:agosarevalo@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Enviar mail a Agostina Arevalo Jaube"
				>
					<i className="fas fa-envelope-square icons" />
				</a>
				<a
					href={CV}
					target="_blank"
					rel="noopener noreferrer"
					title="Descargar CV de Agostina Arevalo Jaube"
					download
				>
					<i className="fas fa-download icons" />
				</a>
			</IconsContainer>
		</HeroContainer>
	);
}
const HeroContainer = styled.div`
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
`;

const Title = styled.p`
	font-size: 1.5em;

	@media ${theme.mediaQueries.above600} {
		font-size: 1.8em;
	}
`;

const TyperwriterContianer = styled.div`
	width: fit-content;
	margin: 0.3rem;
	padding: 0.3em;
	font-size: 1.3em;
	text-align: center;
	background: ${theme.colors.desktopGradient};

	@media ${theme.mediaQueries.above600} {
		font-size: 1.6em;
	}

	.cursor {
		color: #fff;
	}
`;

const IconsContainer = styled.div`
width: fit-content;
display: flex
justify-content: center;
font-size: 2em;
.icons {
	margin: 0.5rem;
	cursor: pointer;
}
`;

export default Hero;

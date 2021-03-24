import styled from "styled-components";
import theme from "../../styles/theme";
import SectionContainer from "../../styles/SectionContainer";
import FotoAgos from "../../assets/foto-agos-perfiles.png";

function AboutMe() {
	return (
		<AboutContainer id="about">
			<InfoContainer>
				<Avatar src={FotoAgos} alt="Foto de Agostina Arevalo Jaube" />
				<Title>Agostina Arevalo Jaube</Title>
				<Subtitle>
					Frontend Web Devoleper <br /> React Js
				</Subtitle>

				<LocationContainer>
					<i className="fas fa-map-marker-alt icon" />
					<Location>Córdoba, Argentina</Location>
				</LocationContainer>
			</InfoContainer>
			<Line />
			<ParagraphContainer>
				<Paragraph>
					Trabajé más de 5 años como Productora Audiovisual freelance
					desempeñando distintos roles: Coordinadora, Jefa o Asistente de
					Producción, hasta que me interesé por el Desarrollo Web.
				</Paragraph>
				<Paragraph>
					Hoy estoy buscando mi primera oportunidad laboral como Frontend Web
					Developer.
				</Paragraph>
				<Paragraph>
					Me encantaría ser parte de
					<b>proyectos desafiantes</b>, donde se pueda{" "}
					<b>crecer profesionalmente</b>, <b>trabajar en equipo</b> con{" "}
					<b>tecnologías de vanguardia</b> , donde puedar colaborar en
					propuestas innovadoras y aprender constantemente.
				</Paragraph>
			</ParagraphContainer>
		</AboutContainer>
	);
}

const AboutContainer = styled(SectionContainer)`
	margin-top: 3rem;
	text-align: center;

	@media ${theme.mediaQueries.above768} {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
`;
const InfoContainer = styled.article`
	margin: 3rem 0rem 0.5rem 0rem;

	@media ${theme.mediaQueries.above768} {
		margin: 2rem 0 2rem 0;
		min-width: 35%;
	}
`;

const Avatar = styled.img`
	width: 120px;
	border-radius: 100px;

	@media ${theme.mediaQueries.above768} {
		width: 150px;
	}
	@media ${theme.mediaQueries.above900} {
		width: 170px;
	}
`;

const Title = styled.h2`
	margin: 0.3rem 0 0 0;
	font-size: ${theme.fonts.titleMobile};

	@media ${theme.mediaQueries.above768} {
		font-size: ${theme.fonts.subtitleTablet};
	}
	@media ${theme.mediaQueries.above900} {
		font-size: ${theme.fonts.subtitleDesktop};
	}
`;

const Subtitle = styled.h3`
	font-size: ${theme.fonts.subtitleMobile};
	background: ${theme.colors.desktopGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media ${theme.mediaQueries.above768} {
		font-size: ${theme.fonts.subtitleTablet};
	}
	@media ${theme.mediaQueries.above900} {
		font-size: ${theme.fonts.subtitleDesktop};
	}
`;

const LocationContainer = styled.div`
	margin: 0.5rem 0 0 0;
	display: flex;
	align-content: center;
	justify-content: center;

	.icon {
		padding: 2px;
		margin: 0px 8px;
		background: ${theme.colors.desktopGradient};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;
const Location = styled.p`
	font-size: ${theme.fonts.subtitleMobile};

	@media ${theme.mediaQueries.above768} {
		font-size: ${theme.fonts.subtitleTablet};
	}
	@media ${theme.mediaQueries.above900} {
		font-size: ${theme.fonts.subtitleDesktop};
	}
`;

const Line = styled.hr`
	margin: 0.8rem;
	width: 80%;
	height: 2px;
	border: none;
	border-radius: 2px;
	background: ${theme.colors.desktopGradient};

	@media ${theme.mediaQueries.above768} {
		height: 30vh;
		min-width: 2px;
		max-width: 2px;
	}
`;

const ParagraphContainer = styled.div`
	margin: 0.5rem 0rem;

	@media ${theme.mediaQueries.above768} {
		padding: 0 0.1rem 0 0.1rem;
		text-align: left;
	}

	@media ${theme.mediaQueries.above900} {
		padding: 0 2.5rem 0 0.1rem;
	}
`;

const Paragraph = styled.p`
	font-size: ${theme.fonts.textMobile};

	@media ${theme.mediaQueries.above768} {
		font-size: ${theme.fonts.textTablet};
	}
	@media ${theme.mediaQueries.above900} {
		font-size: ${theme.fonts.textDesktop};
	}
`;

export default AboutMe;

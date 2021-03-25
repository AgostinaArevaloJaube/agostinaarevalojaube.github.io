import {
	AboutContainer,
	InfoContainer,
	Avatar,
	Title,
	Subtitle,
	LocationContainer,
	Location,
	Line,
	ParagraphContainer,
	Paragraph
} from "./AboutMe.styles";
import FotoAgos from "../../../assets/foto-agos-perfiles.webp";

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
					Me encantaría ser parte de proyectos desafiantes, donde pueda crecer
					profesionalmente, trabajar en equipo con tecnologías de vanguardia,
					donde puedar colaborar en propuestas innovadoras y aprender
					constantemente.
				</Paragraph>
			</ParagraphContainer>
		</AboutContainer>
	);
}

export default AboutMe;

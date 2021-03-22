import styled from "styled-components";
import theme from "../../styles/theme";
import Navbar from "./Navbar";

function Header() {
	return (
		<HeaderContainer>
			<Title>
				<Link href="#hero">
					Agostina <span>Arevalo Jaube</span>
				</Link>
			</Title>
			<Navbar />
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 7vh;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	align-items: center;
	box-shadow: ${theme.colors.darkBoxShadow};
	background-color: #faf8f8;
	z-index: 2000;
`;

const Title = styled.h1`
	font-size: 1.5em;
	background: ${theme.colors.desktopGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media ${theme.mediaQueries.above768} {
		color: ${theme.fonts.primaryColor};
	}
	span {
		display: none;

		@media ${theme.mediaQueries.above768} {
			display: inline;
			font-weight: 500;
			background: ${theme.colors.desktopGradient};
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

const Link = styled.a`
	text-decoration: none;
`;

export default Header;

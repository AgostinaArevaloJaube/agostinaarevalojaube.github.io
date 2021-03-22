import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import theme from "../../styles/theme";
import Navbar from "./Navbar";

function Header() {
	return (
		<HeaderContainer>
			<Title>
				<HashLinks to="#hero">
					Agostina <span>Arevalo Jaube</span>
				</HashLinks>
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
	padding: 0.5rem;
	height: 7vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: ${theme.colors.darkBoxShadow};
	z-index: 2000;
`;

const Title = styled.h2`
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

const HashLinks = styled(HashLink)`
	text-decoration: none;
`;

export default Header;

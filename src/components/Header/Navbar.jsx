import { useState } from "react";
import BurgerOpen from "../../assets/burger.svg";
import BurgerClosed from "../../assets/burger-closed.svg";
import styled from "styled-components";
import theme from "../../styles/theme";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClosingNavbar = () => setIsOpen(false);

	return (
		<nav>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<img src={BurgerClosed} alt="Cerrar menu" />
				) : (
					<img src={BurgerOpen} alt="Abrir menu" />
				)}
			</Hamburger>
			<MenuList isOpen={isOpen}>
				<MenuLi onClick={handleClosingNavbar}>
					<Links href="#about">Sobre mi</Links>
				</MenuLi>
				<MenuLi onClick={handleClosingNavbar}>
					<Links href="#stack">Tecnologías</Links>
				</MenuLi>
				<MenuLi onClick={handleClosingNavbar}>
					<Links href="#proyectos">Proyectos</Links>
				</MenuLi>
				<MenuLi onClick={handleClosingNavbar}>
					<Links href="#hero">Contacto</Links>
				</MenuLi>
			</MenuList>
		</nav>
	);
}

const Hamburger = styled.div`
	margin: 0.5rem;
	width: 1.4rem;
	cursor: pointer;
	@media ${theme.mediaQueries.above600} {
		display: none;
	}
`;

const MenuList = styled.ul`
	position: absolute;
	top: 3.8rem;
	left: 0;
	width: 100%;
	height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
	transition: ${({ isOpen }) => (isOpen ? "height 0.4s ease-in" : "none")};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background: ${theme.colors.mobileGradient};
	color: #fff;

	@media ${theme.mediaQueries.above600} {
		position: relative;
		top: 0;
		height: 100%;
		flex-direction: row;
		background: transparent;
	}
`;

const MenuLi = styled.li`
	padding: 2rem 0.5rem;
	width: 100%;
	text-align: center;
	list-style: none;
	cursor: pointer;

	@media ${theme.mediaQueries.above600} {
		width: fit-content;
		padding: 0.5rem;
	}
`;

const Links = styled.a`
	text-decoration: none;
	color: #fff;

	@media ${theme.mediaQueries.above600} {
		color: ${theme.fonts.primaryColor};

		&:hover{
			transition: font-size 0.2s ease-in-out;
			font-size: 18px;
			border-radius: 1rem;
			color: #fff;
			background: ${theme.colors.desktopGradient};
			-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
		}
`;

export default Navbar;

import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Main />
			</BrowserRouter>
		</div>
	);
}

const Main = styled.main`
	margin-top: 20%;
`;

export default App;

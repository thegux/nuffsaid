import React, { useContext, useState } from "react";
import { useEffect } from "react";
import generateMessage, { Message } from "./Api";
import { CardTile } from "./components";
import Theme from "./config/theme";
import Page from "./styles";
import InboxContext from "./config/context/inbox";
import { v4 as uuidv4 } from "uuid";

const App: React.FC<{}> = () => {
	
	const {dispatchMessages} = useContext(InboxContext);
	const [isGettingMes, setIsGettingMes] = useState(true)

	useEffect(() => {
		if(isGettingMes) {
			const cleanUp = generateMessage((message: Message) => {
				dispatchMessages({type: 'ADD_MESSAGE', message: {...message, id: uuidv4()}});
			});
			return cleanUp;
		}
	}, [dispatchMessages, isGettingMes]);

	return (
			<Page>
				<Theme />
				<header>
					<h1>nuffsaid.com Coding Challenge</h1>
				</header>

				<div className="menu">
					<button onClick={() => {setIsGettingMes(s => !s)}}>{isGettingMes ? 'STOP' : 'START'}</button>
					<button onClick={() => dispatchMessages({type: 'CLEAR_ALL'})}>CLEAR</button>
				</div>

				<div className="cardsContainer">
					<CardTile title={"Error Type 1"} priority={0} />
					<CardTile title={"Warning Type 2"} priority={1} />
					<CardTile title={"Info Type 3"} priority={2} />
				</div>
			</Page>
	);
};

export default App;

import React, { useContext, memo, useMemo, useCallback } from "react";
import StyledCardTile from "./styles";
import Card from "../card";
import InboxContext from "../../config/context/inbox";
import ReceivedMessage from "../../config/interfaces/messages";

function CardTile({ title, priority }: tileProps) {
	
	const { messageState, dispatchMessages } = useContext(InboxContext);
	const filteredMessages = messageState.messages.filter((m) => m.priority === priority);

	const tileMessages = useMemo(() => filteredMessages, [filteredMessages]);

	const clearMessage = useCallback(
		(message: ReceivedMessage) => {
			dispatchMessages({ type: "CLEAR_MESSAGE", message: message });
		},
		[dispatchMessages]
	);

	return (
		<StyledCardTile className="cardTile">
			<div className="cardTile__title">
				<h2>{title}</h2>
				<p>
					<strong>Count: {tileMessages.length}</strong>
				</p>
			</div>

			{tileMessages.map((m) => (
				<Card
					isAlert={messageState.alertMessage === m.id}
					message={m.message}
					clear={() => clearMessage(m)}
					key={m.id}
					priority={m.priority}
				/>
			))}
		</StyledCardTile>
	);
}

interface tileProps {
	title: string;
	priority: number;
}

export default memo(CardTile);

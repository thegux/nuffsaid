import React, {useContext} from 'react';
import StyledCardTile from './styles';
import Card from '../card';
import InboxContext from '../../config/context/inbox';
import ReceivedMessage from '../../config/interfaces/messages';


function CardTile({ title, priority}:tileProps){

    const {messages, dispatchMessages} = useContext(InboxContext);
    const tileMessages = messages.filter((m) => m.priority === priority);

    const clearMessage = (message: ReceivedMessage) => {dispatchMessages({type:'CLEAR_MESSAGE', message: message})}


    return (
        <StyledCardTile className='cardTile'>
            <div className='cardTile__title'>
                <h2>{title}</h2>
                <p><strong>Count: {tileMessages.length}</strong></p>
            </div>
         

            {tileMessages.map((m, key) => 
                <Card message={m.message} clear={() => clearMessage(m)} key={key} id={m.id} priority={m.priority}/>
            )}
        </StyledCardTile>
    );
}


interface tileProps {
    title: string,
    priority:number,
}


export default CardTile;
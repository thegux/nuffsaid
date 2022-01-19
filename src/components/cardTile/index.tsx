import React, {useContext} from 'react';
import StyledCardTile from './styles';
import Card from '../card';
import InboxContext from '../../config/context/inbox';

function CardTile({ title, priority}:tileProps){

    const {messages} = useContext(InboxContext);
    
    return (
        <StyledCardTile className='cardTile'>
            <div className='cardTile__title'>
                <h2>{title}</h2>
                <p><strong>Count: </strong></p>
            </div>
         

            {messages.filter((m) => m.priority === priority).map((m, key) => 
                <Card message={m.message} key={key} id={m.id} priority={m.priority}/>
            )}
        </StyledCardTile>
    );
}


interface tileProps {
    title: string,
    priority:number,
}


export default CardTile;
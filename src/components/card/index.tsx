import React from 'react';
import StyledCard from './styles';

function Card({message, priority, id, clear}:cardProps){
    return (
        <StyledCard className={`card card--${priority}`}>
            <div>{message}</div>
            <button onClick={() => clear()}>clear</button>
        </StyledCard>
    );
}

interface cardProps {
    message: string,
    priority: number,
    id?: string,
    clear: Function,
}


export default Card;
import React from 'react';
import StyledCard from './styles';

function Card({message, priority, id}:cardProps){
    return (
        <StyledCard className={`card card--${priority}`}>
            <div>{message}</div>
            <button>clear</button>
        </StyledCard>
    );
}

interface cardProps {
    message: string,
    priority: number,
    id?: string,
}


export default Card;
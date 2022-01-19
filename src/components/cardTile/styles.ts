import styled from 'styled-components';

const StyledCardTile = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 32%;

    .cardTile__title {
        margin-bottom: calc(var(--gutter) * 2);
    }

    .card--0 {
        background: var(--color-error);
    }

    .card--1 {
        background: var(--color-warning);
    }

    .card--2 {
        background: var(--color-info);
    }

`;

export default StyledCardTile;
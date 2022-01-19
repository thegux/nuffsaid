import styled from 'styled-components';

const StyledCard = styled.div`
    display: block;
    padding:  calc(var(--gutter) * 4);
    margin-bottom:  calc(var(--gutter) * 2);

    box-shadow: var(--box-shadow);
    border-radius: var(--gutter);

    button {
        display: block;
        float: right;

        background: none;
        border: none;
    }
`

export default StyledCard;
import styled from "styled-components";

const Page = styled.div`
    header {
        padding: var(--gutter);
        margin-bottom: calc(var(--gutter) * 2);
        border-bottom: 1px solid black;
    }

    .menu {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: calc(var(--gutter) * 8);

        & button {
            padding: var(--gutter) calc(var(--gutter) * 3);
            margin-right: var(--gutter);

            box-shadow: var(--box-shadow);
            background: var(--color-info);
            
            font-weight: bold;

            &:last-child {
                margin-right: 0;
            }
        }

        
    }

    .cardsContainer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    
        width: var(--containerWidth);
        max-width: 90vw;
        
        margin: 0 auto;
    }
`
export default Page;
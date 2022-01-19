import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    :root{
        --gutter: 5px;
        --containerWidth: 1200px;
        --color-error: #F56236;
        --color-warning: #FCE788;
        --color-info: #88FCA3;
        --box-shadow: 0px 1px 1.5px 1px lightgray;

        h1, h2, h3, h4, h5, h6, p {
            margin:0;
        }

        button {
            border: none;
            border-radius: 2px;
            outline: none;

            font-family: Roboto, sans-serif;

            &:hover {
                cursor: pointer;
                filter: brightness(95%);
                transition: 0.3s;
            }

            &:active {
                filter: brightness(90%);
                transition: 0.3s;
            }

        }
    }
`
import styled, { css } from "styled-components";

export const StyledHero = styled.section`
    margin: 0px auto;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    margin-top: calc(64px + 84px);

    ${({ hasHero }: { hasHero: boolean }) => css`
        ${hasHero ? `
            display: flex;
            align-items: center;
            max-width: unset !important;
            margin: 0 auto;
            flex-direction: column;

            .hero-container {
                border: 1px solid #EAEAEA;
                box-shadow: 0 3.2px 7.2px 0 #0002,0 .6px 1.8px 0 #0000001c;
                padding-top: calc(64px + 82px);
                padding-bottom: 64px;
                width: 100%;
                margin-bottom: 3.5rem;
            }

            .hero-container > .hero-content {
                max-width: 1300px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
            }
        ` : ''};
    `};
`;
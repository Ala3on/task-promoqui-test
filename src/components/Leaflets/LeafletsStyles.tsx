import styled from 'styled-components';

export const LeafletsWrapper = styled.div`
margin: 140px auto;
width: 100%;
max-width: 1500px;
display: flex;
flex-wrap: wrap;
justify-content: center;

    @media (max-width: 500px) {
        margin: 160px auto;
    }
`;
export const NoLeaflets = styled.h2`
margin: 140px auto;
width: 100%;
text-align: center;
`;

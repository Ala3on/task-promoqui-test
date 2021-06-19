import styled from 'styled-components';

interface Leaflet {
    readonly images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
  };


export const TopbarContainer = styled.div`
    text-align: center;
    padding: 15px;
    z-index: 100;
    margin: 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    background-color: rgb(172, 209, 222);
    box-shadow: 0 1px 6px #a0a0a0;
`;

export const SearchInput = styled.input`
    font-size: 20px;
    outline: none;
    border-radius: 8px;
    border: 2px solid #689cc5;
    width: 40%;
    padding: 10px;

    &::placeholder {
        font-size: 20px;
        transform: translateY(1px);
    }
    @media (max-width: 590px) {
        width: 90%;
  }

`;
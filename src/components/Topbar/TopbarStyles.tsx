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
    z-index: 100;
    margin: 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 90px;
    background-color: rgb(172, 209, 222);
`;
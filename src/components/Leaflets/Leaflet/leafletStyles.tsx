import styled from 'styled-components';

interface Leaflet {
    readonly images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
  };

export const LeafletContainer = styled.div`
    position: relative;
    max-width: 400px;
    min-width: 230px;
    min-height: 305px;
    padding: 8px;
    flex: 1 0 21%;
    margin: 8px;
`;

export const LeafletWrapper = styled.div<Leaflet>`
    width: 98%;
    aspect-ratio: auto 3 / 4;
    padding: 16px;
    margin: 0 auto;
    transition: transform .2s, box-shadow .2s;
    box-shadow: 2px 2px 6px #a0a0a0;
    background-image: url('${props => props.images.md}');
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s ease;
    backface-visibility: hidden;

    &:hover {
        transform: scale(1.03);
        opacity: 0.3;
        box-shadow: 3px 3px 8px 1px #a0a0a0;
        cursor: pointer;
    }
`;

export const Cover = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #008CBA;
    
    &:hover {
        opacity: 1;
    }
`;
export const OpenLeaflet = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;
export const Info = styled.div`
    text-align: center;
`;

export const CompanyName = styled.h4`
    margin: 8px 0 0;
`;

export const ExpDate = styled.h5`
    margin: 3px;
    color: #888;
`;
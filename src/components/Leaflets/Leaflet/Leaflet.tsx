import React from 'react';

import { 
    LeafletWrapper, 
    LeafletContainer, 
    Info, 
    CompanyName, 
    Distance, 
    ExpDate,
    Cover, 
    OpenLeaflet,
    LocationSvgWrapper
} from './leafletStyles';
import {default as LocationSvg} from '../../../assets/svg/iconPin.svg'


interface LeafletInterface {
    key: string;
    name: string;
    expTimestamp: number;
    id: string;
    retailer: {
        id: string;
        name: string;
        distance: number;
        priority: number;
        images: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        }
    }
} 

const formatDate = (expDate: number): string => {
    const exp = new Date(expDate*1000);
    return `scade il ${exp.getDay()}-${exp.getMonth()}-${exp.getFullYear()}`;
}

const Leaflet: React.FC<LeafletInterface> = props => {
    return (
        <LeafletContainer>
            <LeafletWrapper images={props.retailer.images}>
                <Cover>
                    <OpenLeaflet>Apri</OpenLeaflet>
                </Cover>
            </LeafletWrapper>
            
            <Info>
                <CompanyName>
                    {props.name}
                </CompanyName>
                <ExpDate>
                    {formatDate(props.expTimestamp)}
                </ExpDate>
                <Distance>
                    <LocationSvgWrapper><img src={LocationSvg} alt='Icon' /></LocationSvgWrapper>
                    {(props.retailer.distance/1000).toFixed(2)}km 
                </Distance>
            </Info>
        </LeafletContainer>
        
    );
};

export default Leaflet;
import React from 'react';
import { 
    LeafletWrapper, 
    LeafletContainer, 
    Info, 
    CompanyName, 
    ExpDate, 
    Cover, 
    OpenLeaflet 
} from './leafletStyles';

interface LeafletInterface {
    key: string
    name: string
    expTimestamp: number
    id: string
    retailer: {
        id: string
        name: string
        distance: number
        priority: number
        images: {
            xs: string
            sm: string
            md: string
            lg: string
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
            </Info>
        </LeafletContainer>
        
    );
};

export default Leaflet;
import React, {useEffect} from 'react';
import { leafletsSelector, fetchLeaflets, CounterState } from '../../app/slice/leaflets';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';

import { LeafletsWrapper, NoLeaflets } from './LeafletsStyles'
import Leaflet from './Leaflet/Leaflet';
import Spinner from '../../UI/Spinner/Spinner';

const Leaflets: React.FC = () => {
    let content;
    const dispatch = useAppDispatch();
    const leaflets = useAppSelector(leafletsSelector);
    const status = useAppSelector((state: RootState) => state.leaflets.status);
    const searchText = useAppSelector((state: RootState) => state.leaflets.searchText);
    // const status = 'loading'
    console.log(searchText, 'searchText');
  
  
    useEffect(() => {
            dispatch(fetchLeaflets());
        }, []);
    console.log(leaflets, 'FLYERS');

    if (status === 'loading') {
        content =  <Spinner />;
    } else if (status === 'succeeded' && leaflets.length > 0) {
        content = leaflets.map((leaflets) => (
        <Leaflet 
            key={leaflets.id} 
            expTimestamp={leaflets.expTimestamp} 
            name={leaflets.name} 
            id={leaflets.id} 
            retailer={leaflets.retailer}/>
        ));
    } else if (status === 'succeeded' && leaflets.length === 0) {
        content = <NoLeaflets>Nessun volantino disponibile</NoLeaflets>;
    } else if (status === 'failed') {
        content = <div>ERRORE: non è stato possibile caricare la lista dei volanti</div>;
    } 

    return (
        <LeafletsWrapper>
            {content}
        </LeafletsWrapper>
    );
};

export default Leaflets;
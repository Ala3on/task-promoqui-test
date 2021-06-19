import React, {useEffect} from 'react';
import { selectAllLeaflets, fetchLeaflets, CounterState } from '../../app/slice/leaflets';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';

import { LeafletsWrapper } from './LeafletsStyles'
import Leaflet from './Leaflet/Leaflet';
import Spinner from '../../UI/Spinner/Spinner';

const Leaflets: React.FC = () => {
    let content;
    const dispatch = useAppDispatch();
    const leaflets = useAppSelector(selectAllLeaflets);
    const status = useAppSelector((state: RootState) => state.leaflets.status);
    // const status = 'loading'
    console.log(status, 'status');
  
  
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
        content = <div>Nessin Volantino Disponibile</div>;
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
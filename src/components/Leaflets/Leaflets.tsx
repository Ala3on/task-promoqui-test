import React, {useEffect} from 'react';
import { selectAllLeaflets, fetchLeaflets, CounterState } from '../../app/slice/leaflets';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';

import Flyer from './Leaflet/Leaflet';

const Flyers: React.FC = () => {
    const dispatch = useDispatch();
    const flyers = useSelector(selectAllLeaflets);
    const status = useSelector((state: RootState) => state.leaflets.status);
    console.log(status, 'status');
  
  
    useEffect(() => {
            dispatch(fetchLeaflets());
        }
    );
    return (
        <Flyer />
    );
};

export default Flyers;
import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { onSearchInputChange } from '../../app/slice/leaflets';

import { 
    TopbarContainer,
    SearchInput
} from './TopbarStyles';




const Leaflet: React.FC = props => {
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    
    const onSearchInputChangeHandler = () => {
        dispatch(onSearchInputChange(searchRef.current!.value))
    }

    return (
        <TopbarContainer>
            <SearchInput 
                type='text' 
                id='search' 
                ref={searchRef} 
                onChange={onSearchInputChangeHandler}
                placeholder='Cerca per nome...'
            />
        </TopbarContainer>
        
    );
};

export default Leaflet;
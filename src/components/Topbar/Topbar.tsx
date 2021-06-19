import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { onSearchInputChange, fetchLeaflets } from '../../app/slice/leaflets';

import { 
    TopbarContainer,
    SearchInput,
    FilterAndSortingButtonWrapper,
    FilterAndSortingButton
} from './TopbarStyles';


const Topbar: React.FC = props => {
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const [sortKeys, setSortKeys] = useState([
        'priority', 
        'expTimestamp',
        'distance', 
        'retailerName', 
        'leafletName'
    ]);
    
    const onSearchInputChangeHandler = () => {
        dispatch(onSearchInputChange(searchRef.current!.value))
    }

    const onClickHandler = (params: any) => {
        dispatch(fetchLeaflets(params))
    }
    const onClickSortHandler = () => {
        const newArr = [...sortKeys];
        newArr.push(newArr.shift()!);
        setSortKeys(newArr);
        dispatch(fetchLeaflets({sort: newArr[0]}))
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

            <FilterAndSortingButtonWrapper>
                <FilterAndSortingButton onClick={() => onClickHandler({maxDistance: 6000})}>Più vicini</FilterAndSortingButton>
                <FilterAndSortingButton onClick={() => onClickHandler({excludeExpired: 1})}>Ancora Validi</FilterAndSortingButton>
                <FilterAndSortingButton onClick={() => onClickSortHandler()}>Ordina per: {sortKeys[0]} </FilterAndSortingButton>
                <FilterAndSortingButton onClick={() => onClickHandler({})}>Rimuovi filtri </FilterAndSortingButton>
            </FilterAndSortingButtonWrapper>
        </TopbarContainer>
        
    );
};

export default Topbar;
import React, {useEffect} from 'react';
import { selectAllLeaflets, fetchLeaflets, CounterState } from './app/slice/leaflets';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';

import Leaflets from './components/Leaflets/Leaflets';

function App() {
  return (
    <Leaflets />
  );
}

export default App;

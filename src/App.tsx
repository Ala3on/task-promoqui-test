import React, {useEffect} from 'react';
import { selectAllFlyers, fetchFlyers, CounterState } from './app/slice/flyers';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';

function App() {
  const dispatch = useDispatch();
  const flyers = useSelector(selectAllFlyers);
  const status = useSelector((state: RootState) => state.counter.status);
  console.log(status, 'status');


 useEffect(() => {
    dispatch(fetchFlyers());
  }
  );

  return (
    <div className="App">
     {'TEST'}
    </div>
  );
}

export default App;

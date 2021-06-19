import React, {useEffect} from 'react';
import styled from 'styled-components';

import Aux from './hoc/Auxilliary';
import Leaflets from './components/Leaflets/Leaflets';
import Topbar from './components/Topbar/Topbar';




const App: React.FC = () => {
  return (
    <Aux>
      <Topbar />
      <Leaflets />
    </Aux>
    
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { 
  SpaceBetween,
  SpaceAround,
} from './components/JustifyContent';
import {
  SixColumnGrid
} from './components/Grids/SixColumnGrid';
import {
  AutoFillGrid
} from './components/Grids/AutoFillGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Let's exemplify the usage of our different displays here.</h1>

      <h2>Flexbox</h2>

      <h3>SpaceBetween</h3>
      <p style={{textAlign: 'left', paddingLeft: 10}}>
        With this effect we can distribute our components on the screen keeping
        the space between them constant
      </p>

      <SpaceBetween nBoxes={3}/>
      <SpaceBetween nBoxes={4}/>
      <SpaceBetween nBoxes={5}/>
      <SpaceBetween nBoxes={6}/>
      <SpaceBetween nBoxes={7}/>

      <h3>Space Around</h3>
      <p style={{textAlign: 'left', paddingLeft: 10}}>
        With this effect we can distribute our components on the screen keeping
        the space around them constant
      </p>
      <SpaceAround nBoxes={3}/>
      <SpaceAround nBoxes={5}/>
      <SpaceAround nBoxes={7}/>

      <h2>Grid</h2>

      <p style={{textAlign: 'left', paddingLeft: 10}}>
        Here we specify our own column scheme of six items per line, that will automatically
        fill the next line once the current line is full
      </p>
      <SixColumnGrid nBoxes={3}/>
      <SixColumnGrid nBoxes={5}/>
      <SixColumnGrid nBoxes={7}/>
      <SixColumnGrid nBoxes={9}/>


      <p style={{textAlign: 'left', paddingLeft: 10}}>
        The next example makes use of the grid auto-fill property. There we try to fit as many boxes as possible
        in a single row and when it can't fit boxes anymore we move to the next row.
      </p>
      <AutoFillGrid nBoxes={5}/>
      <HorizontalLine/>
      <AutoFillGrid nBoxes={15}/>
      <HorizontalLine/>
      <AutoFillGrid nBoxes={25}/>
      <HorizontalLine/>
      <AutoFillGrid nBoxes={35}/>
      <HorizontalLine/>
      <AutoFillGrid nBoxes={45}/>
      <HorizontalLine/>
      <AutoFillGrid nBoxes={55}/>
    </div>
  );
}

const HorizontalLine = styled.hr`
  border: 1px solid black;
`;

export default App;

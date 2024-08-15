import React from 'react';
import Canvas from './components/Canvas';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Canvas>
        <Card text="This is a sample text for card 1" />
      </Canvas>
    </div>
  );
}

export default App;

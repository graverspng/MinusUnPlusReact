import { useState } from "react";
import Counter from './Counter.js'
import Hello from './Hello.js'

function App() {  

  const allNames = [
    "Jekabs",
    "Railijs",
    "Marsels",
  ]

  const allNamers = allNames.map(name, index);

  return (

  <div>
    <Counter />
    <Hello />
    <Hello />
  </div>

  );
}

export default App;

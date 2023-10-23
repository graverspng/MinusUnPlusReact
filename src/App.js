import { useState } from "react"
import Counter from './Counter.js'
import Hello from './Hello.js'
import Check from './Check.js'

function App() {  

  const allNames = [
    "Jekabs",
    "Railijs",
    "Marsels",
  ]

  const allNumbers = [
    7,
    43,
    101,
  ]

  const allChecks = [
    true,
    true,
    false,
  ]

  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name}/>
  });

    const CounterJSX = allNumbers.map((result, indeks) => {
      return <Counter key={indeks} result={result}/>
    });

    const CheckedJSX = allChecks.map((checked, indeks) => {
      return <Check key={indeks} checked={checked}/>
    });

  return (

  <div>
    {helloJSX}
    {CounterJSX}
    {CheckedJSX}
  </div>

  );
}

export default App;

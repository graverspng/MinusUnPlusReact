import { useState } from "react";

function Counter() {

  const [result, setResult] = useState(0);
  const [change, setChange] = useState(0);

  
  function ClickButton() {
    setResult(result + parseInt(change));
  }
  function unclickButton() {
    setResult(result - change);
  }
  function handleChange(event) {
    setChange(event.target.value);
  }
  



  return (
    <div className="App">
      <h1>{result}</h1>
      <button onClick ={ClickButton}>+</button>
      <button onClick ={unclickButton}>-</button>
      <label>
        <input value={change} type="number" onChange={handleChange}></input>
      </label>
      <script>
      </script>
    </div>
    
    
  );
}

export default Counter;

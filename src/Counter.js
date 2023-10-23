import { useState } from "react";

function Counter(props) {

  const [result, setResult] = useState(props.result);
  const [change, setChange] = useState(props.result);

  
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

import { useState } from "react";

function App() {

  const [result, setResult] = useState(0);
  
  function ClickButton() {
    setResult(result + 1);
  }
  function unclickButton() {
    setResult(result - 1);
  }
  



  return (
    <div className="App">
      <h1>{result}</h1>
      <button onClick ={ClickButton}>+1</button>
      <button onClick ={unclickButton}>-1</button>
      <label>
        <input type="search"></input>
      </label>
      <script>
      </script>
    </div>
    
    
  );
}

export default App;

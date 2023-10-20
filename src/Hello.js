import { useState } from "react";

function Hello() {

    const [result, setResult] = useState(0);
    const [change, setChange] = useState(0);
    
    
    function ClickButton() {
        setResult(result + parseInt(change));
      }
    
    function handleChange(event) {
        setChange(event.target.value);
      }

      function myFunction(event) {
        setChange(event.target.value);
      }
    return (

        
        <>
        <input value={change} type="search" onChange={handleChange}></input>
        <p>Hello, {change}</p>
        </>
    );
}

export default Hello;
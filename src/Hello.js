import { useState } from "react";

function Hello(props) {

    const [name, setName] = useState(props.name)

      function changeName(event) {
        setName(event.target.value);
      }
    return (
        <>
        <input value={name} type="search" onChange={changeName}></input>
        <p>Hello, {name}</p>
        </>
    );
}

export default Hello;
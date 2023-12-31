import { useState } from "react";

function Check(props) {

    const [checkbox, setcheckbox] = useState(props.checked)

    function handleChange(event) {
        setcheckbox(event.target.checked);
      }

    return (
        <>
        <input type="checkbox" checked={checkbox} onChange={handleChange} />
        </>
    );
}

export default Check;
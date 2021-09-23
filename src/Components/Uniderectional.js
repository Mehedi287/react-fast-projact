import React, { useState } from 'react';

const Uniderectional = (props) => {
    const [steps, setSteps] = useState(0)
    const handelStepCount = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    return (
        <div>
            <h2>price={props.price}</h2>
            <h2>Steps:{steps}</h2>
            <button onClick={handelStepCount}>walk</button>
        </div>
    );
};

export default Uniderectional;
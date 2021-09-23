import React from 'react';
import Uniderectional from '../Uniderectional';

const Device = (props) => {
    return (
        <div>
            <h1>name:{props.name}</h1>
            <Uniderectional price={props.price}></Uniderectional>
        </div>
    );
};

export default Device;
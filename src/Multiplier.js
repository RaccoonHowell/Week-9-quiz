import React from "react";

const Multiplier = ({ x, y }) => (

    <p>Product = { x * y }</p>       
)

export default Multiplier;

//Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x × y) in a <p>.
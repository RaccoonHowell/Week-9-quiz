import React from "react";
import "./App.css";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";

const App = () => (
    <React.Fragment>
        <Multiplier x={ 5 } y={ 7 } />
        <EvenClicks />
    </React.Fragment>
);

export default App;
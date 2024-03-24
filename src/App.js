import React from "react";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/queso" component={Juan} />
    </div>
  );
};

const Juan = () => {
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  );
};

export default App;

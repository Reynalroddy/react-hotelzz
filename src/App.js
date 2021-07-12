import React from "react";
import { About, Home, Contact } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/contact" children={<Contact />} />
        <Route path="/about" children={<About />} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GreetingWorld from "./GreetingWorld";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" element={ <GreetingWorld greeting='Hello!' /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App

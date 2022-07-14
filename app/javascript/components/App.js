import React from "react"
import PropTypes from "prop-types"

import { BroweserRouter, Switch, Route } from 'react-router-dom'
import GreetingWorld from "./GreetingWorld";

class App extends React.Component {
  render () {
    return (
      <BroweserRouter>
        <Switch>
          <Route exact path="/" render={() => <GreetingWorld greeting="This is a test"/> } />
        </Switch>
      </BroweserRouter>
    );
  }
}

export default App

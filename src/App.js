import React, { Component } from "react"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Tool from "./components/Tool"
import SCI from "./components/SCI"
import Cake from "./components/Cake"

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Music! GET SOME!!!</h1>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home </Link>
              </li>
              <li>
                <Link to='/tool'>Tool </Link>
              </li>
              <li>
                <Link to='/sci'>SCI </Link>
              </li>
              <li>
                <Link to='/cakes'>Cake </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' exact component={Homepage}></Route>
          <Route exact path='/tool' component={Tool}></Route>
          <Route exact path='/sci' component={SCI}></Route>
          <Route exact path='/cakes' component={Cake}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

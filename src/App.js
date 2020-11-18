import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Message from './Components/Message/Message';
import HomePage from './Components/HomePage/HomePage';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';


export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route path="/homePage">
            <HomePage></HomePage>
          </Route>
          <Route path="/message">
            <Message></Message>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/notFound">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

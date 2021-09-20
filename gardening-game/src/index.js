import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/_base.css';
import App from './views/App';
import Login from './views/Login';
import reportWebVitals from './reportWebVitals';
import UserProvider from './store/providers/UserProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

console.log("%cGardening Game", "color: green; font-weight: bold; font-size: 3vw;");
console.log("%c(This is made by Nguyễn Phúc Linh)", "color: green; font-weight: bold; font-size: 1vw;");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route path="/" exact>
          <UserProvider >
            <App />
          </UserProvider>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

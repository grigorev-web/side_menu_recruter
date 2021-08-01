import "./styles.css";
import SideMenu from "./components/SideMenu";
import Table from "./components/Table";

import { useReducer } from "react";
import { reducer } from "./store/reducer";
import { initialState } from "./store/initialState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div className={`App container ${state.appShadow ? "shading" : ""}`}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <SideMenu
          clickOutsideMenu={() => dispatch({ type: "CLICK_OUTSIDE_MENU" })}
          active={state.sideMenu.active}
          onToggleMenuBtn={() => dispatch({ type: "TOGGLE_SIDE_MENU" })}
        />

        <Switch>
          <Route path="/operator">
            <Table />
          </Route>
          <Route path="/recruter">
            <p>Recruter</p>
          </Route>
          <Route path="/admin">
            <p>Admin</p>
          </Route>
          <Route path="/stat">
            <p>Statistics</p>
          </Route>
          <Route path="/settings">
            <p>Settings</p>
          </Route>
          <Route path="/logout">
            <p>Logout</p>
          </Route>
        </Switch>

        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Router>
  );
}

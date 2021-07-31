import "./styles.css";
import SideMenu from "./components/SideMenu";
import Table from "./components/Table";

import { useReducer } from "react";
import { reducer } from "./store/reducer";
import { initialState } from "./store/initialState";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`App container ${state.appShadow ? "shading" : ""}`}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SideMenu
        clickOutsideMenu={() => dispatch({ type: "CLICK_OUTSIDE_MENU" })}
        active={state.sideMenu.active}
        onToggleMenuBtn={() => dispatch({ type: "TOGGLE_SIDE_MENU" })}
      />
      <Table />

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
  );
}

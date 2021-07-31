import { FaBars, FaTimes } from "react-icons/fa";
import { reducer } from "../store/reducer";
import OutsideAlerter from "./OutsideAlerter";
//<div className={`side-menu ${props.active ? "active" : ""}`}>
export default function SideMenu(props) {
  const MenuBars = () => {
    if (!!props.active) {
      return <FaTimes className="menu-toggle-btn" />;
    } else {
      return <FaBars className="menu-toggle-btn" />;
    }
  };

  return (
    <OutsideAlerter clickOutsideMenu={props.clickOutsideMenu}>
      <div className={`side-menu ${props.active ? "active" : ""}`}>
        <p>Side Menu</p>
        <div
          className="menu-toggle-btn-wrapper"
          onClick={props.onToggleMenuBtn}
        >
          <MenuBars />
        </div>
      </div>
    </OutsideAlerter>
  );
}

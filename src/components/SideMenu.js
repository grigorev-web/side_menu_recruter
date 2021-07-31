import {
  FaBars,
  FaChartPie,
  FaCog,
  FaHeadset,
  FaSignOutAlt,
  FaTimes,
  FaUsers,
  FaUserShield
} from "react-icons/fa";
import { reducer } from "../store/reducer";
import OutsideAlerter from "./OutsideAlerter";
import msContactLogo from "../static/img/favicon.png";

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
        <div
          className="menu-toggle-btn-wrapper"
          onClick={props.onToggleMenuBtn}
        >
          <MenuBars />
        </div>
        <div className="menu-header">
          <div className="menu-logo">
            <img width="18px" src={msContactLogo} alt="HR CRM" />
            HR CRM
          </div>
        </div>
        <div className="menu-body">
          <p>
            <FaHeadset className="menu-icon" /> <span>Оператор</span>
          </p>
          <p>
            <FaUsers className="menu-icon" /> <span>Рекрутер</span>
          </p>
          <p>
            <FaUserShield className="menu-icon" /> <span>Администратор</span>
          </p>
          <p>
            <FaChartPie className="menu-icon" /> <span>Статистка</span>
          </p>
          <p>
            <FaCog className="menu-icon" /> <span>Настройки</span>
          </p>
          <p>
            <FaSignOutAlt className="menu-icon" /> <span>Выйти</span>
          </p>
        </div>
      </div>
    </OutsideAlerter>
  );
}

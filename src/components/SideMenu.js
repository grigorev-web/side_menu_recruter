export default function SideMenu(props) {
  return (
    <div
      className={`side-menu ${props.active ? "active" : ""}`}
      onMouseEnter={props.mouseEnter}
      onMouseLeave={props.mouseLeave}
    >
      <p>Side Menu</p>
    </div>
  );
}

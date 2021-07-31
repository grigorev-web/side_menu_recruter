export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDE_MENU":
      return {
        ...state,
        appShadow: !state.sideMenu.active,
        sideMenu: {
          ...state.sideMenu,
          active: !state.sideMenu.active
        }
      };
    case "SIDE_MENU_OUT":
      return {
        ...state,
        appShadow: false,
        sideMenu: {
          ...state.sideMenu,
          active: false
        }
      };
    default:
      throw new Error();
  }
}

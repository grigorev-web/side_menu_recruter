export function reducer(state, action) {
  switch (action.type) {
    case "SIDE_MENU_IN":
      console.log("side menu in");
      return {
        ...state,
        sideMenu: {
          ...state.sideMenu,
          active: true
        }
      };
    case "SIDE_MENU_OUT":
      return {
        ...state,
        sideMenu: {
          ...state.sideMenu,
          active: false
        }
      };
    default:
      throw new Error();
  }
}

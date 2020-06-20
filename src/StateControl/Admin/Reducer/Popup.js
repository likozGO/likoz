const PopupReducer = (state = false, action) => {
  switch (action.type) {
    case 'POPUP_CONTROL':
      return !state;
    default:
      return state;
  }
};

export default PopupReducer;

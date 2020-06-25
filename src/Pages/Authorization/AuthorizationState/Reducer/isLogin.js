const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_CONTROL':
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;

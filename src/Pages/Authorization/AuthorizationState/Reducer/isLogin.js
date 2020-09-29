const initialState = {
  user: [],
  isLogin: false,
};

const isLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_CONTROL':
      return { ...state, isLogin: !state.isLogin };
    default:
      return state;
  }
};

export default isLoginReducer;

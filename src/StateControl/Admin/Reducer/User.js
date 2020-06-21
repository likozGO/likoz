const UserReducer = (state = {
  isOpen: false, rows: [], error: false, loading: false,
}, action) => {
  switch (action.type) {
    case 'POPUP_CONTROL':
      return { ...state, isOpen: !state.isOpen };
    case 'USER_DATA':
      return { ...state, rows: action.data };
    case 'USER_DATA_ADD':
      return { ...state, rows: [...state.rows, action.data] };
    case 'USER_DATA_ERROR':
      return { ...state, error: !state.error };
    case 'USER_DATA_LOADING':
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default UserReducer;

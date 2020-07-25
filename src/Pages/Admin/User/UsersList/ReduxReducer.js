const initialState = {
  isOpen: false,
  rows: [],
  error: false,
  loading: false,
  search: '',
};

const UserReducer = (state = initialState, action) => {
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
    case 'USER_DATA_SEARCH':
      return { ...state, search: action.data };
      // rows.filter((a) => a.username.includes(action.data))
    default:
      return state;
  }
};

export default UserReducer;

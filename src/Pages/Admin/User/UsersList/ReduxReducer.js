const initialState = {
  isOpen: false,
  rows: [],
  error: false,
  loading: false,
  search: '',
  sorted: 'RESET_FILTER',
  userSelected: [],
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
    case 'RESET_FILTER':
      return { ...state, sorted: action.data };
    case 'ADMIN_FILTER':
      return { ...state, sorted: action.data };
    case 'PASSWORD_BIGGER_10':
      return { ...state, sorted: action.data };
    case 'USER_SELECTED':
      return { ...state, userSelected: action.data };
    default:
      return state;
  }
};

export default UserReducer;

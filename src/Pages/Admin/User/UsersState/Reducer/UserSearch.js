const initialState = {
  search: '',
};

const UserSearch = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_DATA_SEARCH':
      return { search: action.data };
    default:
      return state;
  }
};

export default UserSearch;

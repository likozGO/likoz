export const UserList = (data) => ({
  type: 'USER_DATA',
  data,
});

export const UserListAdd = (data) => ({
  type: 'USER_DATA_ADD',
  data,
});

export const UserError = () => ({
  type: 'USER_DATA_ERROR',
});

export const UserLoading = () => ({
  type: 'USER_DATA_LOADING',
});

export const UserSearch = (data) => ({
  type: 'USER_DATA_SEARCH',
  data,
});

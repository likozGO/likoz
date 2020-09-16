export const ReduxAction = (data) => ({
  type: 'USER_DATA',
  data,
});

export const UserListAdd = (data) => ({
  type: 'USER_DATA_ADD',
  data,
});

export const UserListDelete = (data) => ({
  type: 'USER_DATA_DELETE',
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

export const UserSelected = (data) => ({
  type: 'USER_SELECTED',
  data,
});

export const FILTER_TYPE = {
  RESET_FILTER: 'RESET_FILTER',
  ADMIN_FILTER: 'ADMIN_FILTER',
  PASSWORD_BIGGER_10: 'PASSWORD_BIGGER_10',
};

export const UserFilter = (data) => ({
  type: data,
  data,
});

export const PopupAction = () => ({
  type: 'POPUP_CONTROL',
});

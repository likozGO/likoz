import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxAction, UserSearch } from './ReduxAction';
import { UserReducer } from './ReduxReducer';

function ListUserSearch() {
  const dispatch = useDispatch();
  const userDB = useSelector((state) => state.UserReducer);

  const changeSearch = (e) => {
    dispatch(UserSearch(e.target.value));
    // dispatch(UserList(userDB.rows.filter((a) => a.username.includes(e.target.value))));
  };
  const dataSearch = () => {
    console.log(userDB);
  };

  return (
    <>
      <Grid container spacing={1} alignItems="flex-end" style={{ flexWrap: 'nowrap', marginRight: '125px' }}>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search" onInput={changeSearch} />
        </Grid>
        <Grid item>
          <Tooltip title="Example: Ivan">
            <IconButton aria-label="search" style={{ padding: '3px 5px' }}>
              <SearchIcon onClick={dataSearch} />
            </IconButton>
          </Tooltip>
        </Grid>

      </Grid>
    </>
  );
}

export default ListUserSearch;

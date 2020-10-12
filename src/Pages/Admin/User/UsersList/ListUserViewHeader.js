import { lighten, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import FullScreenDialog from './UserDialog';
import ListUserSearch from './ListUserSearch';
import { FILTER_TYPE, UserFilter } from './ReduxAction';
import UserDialogDelete from './UserDialogDelete';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  highlight:
        theme.palette.type === 'light'
          ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
          : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
  title: {
    flex: '1 1 100%',
  },
}));
export const ListUserViewHeader = () => {
  const classes = useToolbarStyles();
  const userDB = useSelector((state) => state.UserReducer);
  const users = userDB.userSelected;
  const dispatch = useDispatch();
  const numSelected = users.length;
  const dataSelected = users;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleSortItemClick = (event, index) => {
    switch (index) {
      case 1:
        dispatch(UserFilter(FILTER_TYPE.RESET_FILTER));
        break;
      case 2:
        dispatch(UserFilter(FILTER_TYPE.ADMIN_FILTER));
        break;
      case 3:
        dispatch(UserFilter(FILTER_TYPE.PASSWORD_BIGGER_10));
        break;
      default:
        dispatch(UserFilter(FILTER_TYPE.RESET_FILTER));
        break;
    }
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const options = [
    'Filters',
    'No filters',
    'Only Admins',
    'Password bigger than 10',
  ];
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected}
          {' '}
          selected
        </Typography>
      ) : (
        <>
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Users
            <Chip
              variant="outlined"
              size="small"
              style={{ marginLeft: '15px' }}
              icon={<FaceIcon />}
              label={options[selectedIndex]}
            />
          </Typography>
        </>
      )}
      <div className={classes.margin}>
        <ListUserSearch />
      </div>
      {numSelected == 1
        ? (
          <Tooltip title="Edit">
            <>
              <FullScreenDialog modal_type="EditUser" user_info={dataSelected} />
            </>
          </Tooltip>
        )
        : null}
      {numSelected > 0 ? (
        <UserDialogDelete />
      ) : (
        <>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list" style={{ padding: '0' }}>
              <FilterListIcon onClick={handleClickListItem} style={{ width: '1.3em', height: '1.3em' }} />
            </IconButton>
          </Tooltip>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleSortItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Tooltip title="Add user">
            <>
              <FullScreenDialog modal_type="CreateUser" />
            </>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
};
ListUserViewHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { EnhancedTableHead, getComparator, stableSort } from './ListUserSorting';
import { ListUserViewHeader } from './ListUserViewHeader';
import { UserSelected } from './ReduxAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  idColumn: {
    display: 'none',
  },
  container: {
    maxHeight: 440,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));
export default function ListUserViewBody() {
  const dispatch = useDispatch();
  const userDB = useSelector((state) => state.UserReducer);
  const {
    rows, loading, error, search, sorted,
  } = userDB;
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('email');
  const [selected, setSelected] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const userFilter = (a) => (
    a.username.toLowerCase().includes(search)
      && ((sorted === 'ADMIN_FILTER' ? a.isAdmin : '')
      || (sorted === 'PASSWORD_BIGGER_10' ? a.password.length >= 10 : '')
      || (sorted === 'RESET_FILTER' ? a : '')));

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      if (event.target.checked && selected.length > 0) {
        setSelectedRow([]);
        setSelected([]);
        dispatch(UserSelected([]));
      } else {
        const newSelecteds = rows.filter((a) => userFilter(a)).filter((n) => !n.isNew).map((n) => n._id);
        setSelected(newSelecteds);
        dispatch(UserSelected(newSelecteds));
      }
      return;
    }
    setSelectedRow([]);
    setSelected([]);
    dispatch(UserSelected([]));
  };
  const handleClick = (event, name, dataSelected) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    const stateDataSelected = dataSelected;

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelectedRow(stateDataSelected);
    setSelected(newSelected);
    dispatch(UserSelected(newSelected));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  if (loading === true) {
    return (<div>Table loading</div>);
  }
  if (error === true) {
    return (<div>Error</div>);
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ListUserViewHeader numSelected={selected.length} dataSelected={selectedRow} />
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            stickyHeader
            aria-label="sticky table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .filter((a) => userFilter(a))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={row.isNew ? null : (event) => handleClick(event, row._id, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell
                        id={labelId}
                        component="th"
                        scope="row"
                        padding="none"
                        className={classes.idColumn}
                      >
                        {row._id}
                      </TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.password}</TableCell>
                      <TableCell>{`${row.isAdmin}`}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.filter((a) => userFilter(a)).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

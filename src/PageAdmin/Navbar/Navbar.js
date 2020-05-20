import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {routes} from '../../Router'

import clsx from 'clsx';
import {
    makeStyles,
    AppBar,
    Collapse,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    useTheme
} from '@material-ui/core';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import UsersIcon from '@material-ui/icons/People';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import LotteryIcon from '@material-ui/icons/Casino';
import BlogIcon from '@material-ui/icons/ImportContacts';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import Remove from '@material-ui/icons/DeleteForever';

import ListProduct from "../Components/Product/ListProduct";
import CreateProduct from "../Components/Product/CreateProduct";
import Dashboard from "../Dashboard/Dashboard";
import EditProduct from "../Components/Product/EditProduct";
import ListUser from "../Components/User/ListUser/ListUser";
import CreateUserForm from "../Components/User/HandleUsers/CreateUser/CreateUserForm";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [toggle, setToggle] = React.useState(false); //multi list

    const [toggle2, setToggle2] = React.useState(false); //multi list

    const [toggle3, setToggle3] = React.useState(false); //multi list

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleTopicSwitch = () => {
        setToggle(!toggle);
    };
    const handleTopicSwitch2 = () => {
        setToggle2(!toggle2);
    };

    const handleTopicSwitch3 = () => {
        setToggle3(!toggle3);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Switch>
                        <Route path={`/admin`} exact children={<h1>Admin page</h1>}/>

                        <Route path={`/admin/users`} exact children={<h1>Users page</h1>}/>
                        <Route path={`/admin/users/add`} children={<h1>Users page add</h1>}/>

                        <Route path={`/admin/shop`} exact children={<h1>Shop page</h1>}/>
                        <Route path={`/admin/shop/add`} children={<h1>Shop page add</h1>}/>
                        <Route path={`/admin/shop/edit`} children={<h1>Shop page edit</h1>}/>
                    </Switch>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {/*USERS START*/}
                    <ListItem button component={Link} to={'/admin/users'} onClick={handleTopicSwitch3}>
                        <ListItemIcon>
                            <UsersIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Users'}/>
                        {toggle2 ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={toggle3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested} component={Link} to={'/admin/users'}>
                                <ListItemIcon>
                                    <ListIcon/>
                                </ListItemIcon>
                                <ListItemText primary="List"/>
                            </ListItem>
                            <ListItem button className={classes.nested} component={Link} to={'/admin/users/add'}>
                                <ListItemIcon>
                                    <AddIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Add"/>
                            </ListItem>
                        </List>
                    </Collapse>
                    {/*USERS END*/}

                    {/*SHOP START*/}
                    <ListItem button component={Link} to={'/admin/shop'} onClick={handleTopicSwitch}>
                        <ListItemIcon>
                            <ShopIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Shop'}/>
                        {toggle ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={toggle} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to={'/admin/shop'} className={classes.nested}>
                                <ListItemIcon>
                                    <ListIcon/>
                                </ListItemIcon>
                                <ListItemText primary="List"/>
                            </ListItem>
                            <ListItem button component={Link} to={'/admin/shop/add'} className={classes.nested}>
                                <ListItemIcon>
                                    <AddIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Add"/>
                            </ListItem>
                            <ListItem button component={Link} to={'/admin/shop/edit'} className={classes.nested}>
                                <ListItemIcon>
                                    <EditIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Edit"/>
                            </ListItem>
                            <ListItem button onClick={handleTopicSwitch2} disabled>
                                <ListItemIcon>
                                    <LotteryIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Lottery"/>
                                {toggle2 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={toggle2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <ListIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="List"/>
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <AddIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Add"/>
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <EditIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Edit"/>
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <Remove/>
                                        </ListItemIcon>
                                        <ListItemText primary="Remove"/>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                    {/*SHOP END*/}

                    {/*BLOG START*/}
                    <ListItem button disabled>
                        <ListItemIcon>
                            <BlogIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Blog'}/>
                    </ListItem>
                    {/*BLOG END*/}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path={`/admin`} exact component={Dashboard}/>

                    <Route path={`/admin/users`} exact component={ListUser}/>
                    <Route path={`/admin/users/add`} component={CreateUserForm}/>

                    <Route path={`/admin/shop`} exact component={ListProduct}/>
                    <Route path={`/admin/shop/add`} component={CreateProduct}/>
                    <Route path={`/admin/shop/edit`} component={EditProduct}/>
                </Switch>
            </main>
        </div>
    );
}
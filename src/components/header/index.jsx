import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const { user, loggedInStatus } = props.loggedInStatus;
    const { handleLogoutClick } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Star Wars
                    </Typography>
                    {loggedInStatus ? (
                        <React.Fragment>
                            <Button color="inherit">{user}</Button>
                            <Button color="inherit" onClick={() => handleLogoutClick()}>Logout</Button>
                        </React.Fragment>
                    ) : null}
                </Toolbar>
            </AppBar>
        </div>
    );
}


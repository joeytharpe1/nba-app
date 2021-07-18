import React from 'react';
// import Home from './Home';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        paddingTop:'15px' ,
        margin: theme.spacing(0, 'auto'),
        display: 'flex',
        backgroundColor: theme.palette.secondary.main
       
    },
    title: {
        // flexGrow: 1,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            textDecoration: 'underline'
        }
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
        }
    },
    toolbar:{
        display: 'flex',
        textAlign: 'center',
        align: 'center',
        justifyContent: 'center'
    },
    searchButton: {
        border: '1px solid #fff',
        borderRadius: '20px',
        marginLeft: '80px',
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}> 
                <Typography variant="h6" align="center" color="primary" className={classes.title}>
                    <Button  className={classes.button}
                        color="inherit"
                    >
                        Men
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" color="primary" className={classes.title}>
                    <Button className={classes.button}
                        color="inherit"
                    >
                        Women
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" color="primary" className={classes.title}>
                    <Button className={classes.button}
                        color="inherit"
                    >
                        Kids
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" color="primary" className={classes.title}>
                    <Button  className={classes.button}
                        color="inherit"
                    >
                        Customize
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" color="primary" className={classes.title}>
                    <Button className={classes.button}
                        color="inherit"
                    >
                        Sale
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" color="primary" className={classes.title}>
                    <Button className={classes.button}
                        color="inherit"
                    >
                        School
                    </Button>
                </Typography>
                <Button
                color="primary"
                className={classes.searchButton}
                variant="outlined"
                startIcon={<SearchRoundedIcon />}
                >
                    Search...
                </Button>
            </Toolbar>
        </AppBar >
        {/* <Home /> */}
        </>
    );
}

export default Navbar

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        flexGrow: 1,
        '&:hover': {

            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static" display="flex" >
            <Toolbar >
                <Typography variant="h6" align="center" className={classes.title}>
                    <Button component={Link} to='/Home' className={classes.button}
                        color="inherit"
                        startIcon={<HomeOutlinedIcon />}
                    >
                        Home
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" className={classes.title}>
                    <Button component={Link} to='/BallTeam' className={classes.button}
                        color="inherit"
                        startIcon={<SportsBasketballIcon />}
                    >
                        Teams
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" className={classes.title}>
                    <Button component={Link} to='/Standings' className={classes.button}
                        color="inherit"
                        startIcon={<ListIcon />}
                    >
                        Standings
                    </Button>
                </Typography>
                <Typography variant="h6" align="center" className={classes.title}>
                    <Button component={Link} to='/News' className={classes.button}
                        color="inherit"
                        startIcon={<AnnouncementRoundedIcon />}
                    >
                        News
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar

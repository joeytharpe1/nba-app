import React from 'react';
import FantasyLeaders from './FantasyLeaders';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextLoop from "react-text-loop";


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop:10,
    },
    root: {
        display: 'flex',
        border: '1px solid #32a852',
        borderRadius: '5%',
        backgroundColor: '#000000',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },

    media: {
        height: 280,
        backgroundPosition: 'top'
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    },
    typography: {
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    }

}));


function News() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" color='secondary' align="center" className={classes.typography}>
                        A look at our Fantasy Nightly Leaders. Rankings are based upon points per game, assists per game, and rebounds per game. Heres our top 5  <TextLoop>
                                <span>🏆.</span>
                                <span>🏀.</span>
                                <span>👑.</span>
                            </TextLoop>
                    </Typography>
                </Grid>
            </Grid>
            <FantasyLeaders />
        </Container>
    )
}

export default News;

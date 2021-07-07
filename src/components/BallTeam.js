import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { bballTeams } from './queryNba';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Slide from 'react-reveal/Slide';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10,
    },

    media: {
        height: 180,
        backgroundPosition: 'top'
    },

    card: {
        border: '1px solid #32a852',
        borderRadius: '10%',
        backgroundColor: '#000000',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    },
    typography: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }

}));


function BallTeam() {
    const classes = useStyles();


    console.log(bballTeams)
    return (
        <Container className={classes.container} >
            <Grid container spacing={2} >
                {bballTeams.filter(bballTeam => bballTeam.leagues.standard.confName !== 'Intl')
                    .filter(bballTeam => bballTeam.leagues.standard.confName !== 'Internatio')
                    .map((bballTeam) => (
                        <Grid key={bballTeam.teamId} item sm={6} md={4}>
                            <Slide left>
                                <Button onClick={() => window.open(`https://www.nba.com/${bballTeam.nickname.toLowerCase()}`)}>
                                    <Card elevation={15} className={classes.card} align="center">
                                        <CardHeader className={classes.typography}
                                            title={bballTeam.fullName}
                                            subheader={bballTeam.city}
                                        />
                                        <CardMedia className={classes.media}
                                            component='img'
                                            image={bballTeam.logo}
                                            title={bballTeam.fullName}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" align="center" color="warning" className={classes.typography}>
                                                {bballTeam.fullName} are in the {bballTeam.leagues.standard.confName} conference, and in the {bballTeam.leagues.standard.divName} division.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Button>
                            </Slide>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}

export default BallTeam;

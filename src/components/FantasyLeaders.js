import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop:20,
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
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
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
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }

}));


function FantasyLeaders() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={2} className={classes.container}>
                <Grid item sm={12} md={4}>
                    <Fade left>
                    <Card className={classes.root} onClick={()=>window.open('https://www.nba.com/player/203999/nikola-jokic')}
                    elevation={15}
                    >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" className={classes.typography}>
                                    Nikola Jokic
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    #15 | C
                                </Typography>
                            </CardContent>
                            <Container align='left'>
                                <Typography gutterBottom className={classes.typography} variant="body2">PPG: 26.4</Typography>
                                <br />
                                <Typography className={classes.typography} variant="body2">APG: 8.3</Typography>
                                <br />
                                <Typography gutterBottom className={classes.typography} variant="body2">RPG: 10.8 </Typography>
                            </Container>
                        </div>
                        <CardMedia className={classes.cover}
                            component='img'
                            image='images/jokic.png'
                        />
                    </Card>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Fade bottom>
                    <Card className={classes.root} onClick={()=>window.open('https://www.nba.com/player/201939/stephen-curry')}
                    elevation={15}
                    >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" className={classes.typography}>
                                    Stephen Curry
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    #30 | G
                                </Typography>
                            </CardContent>
                            <Container align='left'>
                                <Typography className={classes.typography} variant="body2">PPG: 32.0</Typography>
                                <br />
                                <Typography className={classes.typography} variant="body2">APG: 5.8</Typography>
                                <br />
                                <Typography gutterBottom className={classes.typography} variant="body2">RPG: 5.5 </Typography>
                            </Container>
                        </div>
                        <CardMedia className={classes.cover}
                            component='img'
                            image='images/steph.png'
                        />
                    </Card>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Fade right>
                    <Card className={classes.root} onClick={()=>window.open('https://www.nba.com/player/201566/russell-westbrook')}
                    elevation={15}
                    >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" className={classes.typography}>
                                    Russell Westbrook
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    #4 | G
                                </Typography>
                            </CardContent>
                            <Container align='left'>
                                <Typography className={classes.typography} variant="body2">PPG: 22.2</Typography>
                                <br />
                                <Typography className={classes.typography} variant="body2">APG:11.7</Typography>
                                <br />
                                <Typography gutterBottom className={classes.typography} variant="body2">RPG: 11.5 </Typography>
                            </Container>
                        </div>
                        <CardMedia className={classes.cover}
                            component='img'
                            image='images/westbrook.png'
                        />
                    </Card>
                    </Fade>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Fade left>
                    <Card className={classes.root} onClick={()=>window.open('https://www.nba.com/player/203507/giannis-antetokounmpo')}
                    elevation={15}
                    >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" className={classes.typography}>
                                    Giannis Antetokounmpo
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    #34 | F
                                </Typography>
                            </CardContent>
                            <Container align="left">
                                <Typography className={classes.typography} variant="body2">PPG: 28.9 </Typography>
                                <br />
                                <Typography className={classes.typography} variant="body2">APG: 5.9 </Typography>
                                <br />
                                <Typography gutterBottom className={classes.typography} variant="body2">RPG: 11.0 </Typography>
                            </Container>
                        </div>
                        <CardMedia className={classes.cover}
                            component='img'
                            image='images/giannis.png'
                        />
                    </Card>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Fade right>
                    <Card className={classes.root} onClick={()=>window.open('https://www.nba.com/player/1629029/luka-doncic')}
                    elevation={15}
                    >
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" className={classes.typography}>
                                    Luka Doncic
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    #77 | F-G
                                </Typography>
                            </CardContent>
                            <Container align='left'>
                                <Typography className={classes.typography} variant="body2">PPG: 27.7</Typography>
                                <br />
                                <Typography className={classes.typography} variant="body2">APG: 8.6</Typography>
                                <br />
                                <Typography gutterBottom className={classes.typography} variant="body2">RPG: 8.0 </Typography>
                            </Container>
                        </div>
                        <CardMedia className={classes.cover}
                            component='img'
                            image='images/luka.png'
                        />
                    </Card>
                    </Fade>
                </Grid>
            </Grid>

        </>
    )
}

export default FantasyLeaders;

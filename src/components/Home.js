import React from 'react';
import News from './News';
import { makeStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 20,
    },

    root: {
        display: 'flex',
        margin: theme.spacing(0, 'auto'),
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
        // width: '80%',
        margin: 'auto',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    }

}));

function Home() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <Grid container spacing={3} className={classes.container} position='fixed'>
                    <Grid item xs={3}>
                        <Typography variant="h6" color="primary" align="flex-start" gutterBottom>
                            Men
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="body1" color="primary" className={classes.typography} gutterBottom>
                            Shoes
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" color="primary" className={classes.typography} gutterBottom>
                            Clothing
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" color="primary" className={classes.typography} gutterBottom>
                            Sale
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <News />
        </>
    )
}

export default Home;

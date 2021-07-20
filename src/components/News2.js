import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 30,
        marginBottom: 10
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
    card: {
        backgroundColor: '#ffff',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    media: {
        height: 490,
        margin: 'auto',
        backgroundPosition: 'top'
    },
    mediacard: {
        height: 350,
        backgroundPosition: 'contained'
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    },
    typography: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            transform: "scale3d(1.05, 1.05, 1)",
            cursor: 'pointer'
        }
    }

}));


function News2() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" color="primary">
                        More to Explore
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.mediacard}
                            image='images/bestseller.jpg'
                            title='nike blazer'
                        />
                        <CardContent>
                            <Typography variant="body1" color="primary" gutterBottom>
                                Best Sellers
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.mediacard}
                            image='images/coach.jpg'
                            title='nike blazer'
                        />
                        <CardContent>
                            <Typography variant="body1" color="primary" gutterBottom>
                                Sale Styles
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.mediacard}
                            image='images/nikev2.jpg'
                            title='nike blazer'
                        />
                        <CardContent>
                            <Typography variant="body1" color="primary" gutterBottom>
                                The Latest &amp; Greatest
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h5">
                        Sports
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <CardContent className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            component='img'
                            image='images/vball.jpg'
                            title='theFuture'
                        />
                    </CardContent>
                </Grid>
            </Grid>
        </>
    )
}

export default News2;

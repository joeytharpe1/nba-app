import React from 'react';
import News2 from './News2';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10,
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


function News() {
    const classes = useStyles();
    return (
        <Container >
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <CardContent className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            component='img'
                            image='images/theFuture.jpg'
                            title='theFuture'
                        />
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={10} md={11}>
                    <Typography variant="h5" color="primary">
                        The Latest &amp; Greatest
                    </Typography>
                </Grid>
                <Grid item xs={2} md={1}>
                    <Typography variant="body2" align='left' color="primary" className={classes.typography}>
                        Shop All
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.mediacard}
                            image='images/blazer.jpg'
                            title='nike blazer'
                        />
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={8} md={8}>
                                    <Typography variant="body1" color="primary" gutterBottom>
                                        Nike Blazer Low
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Typography variant="body1" color="primary" align="center" gutterBottom>
                                        $95
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body2" color="primary">
                                    Men's Shoe
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.mediacard}
                            image='images/jordan.jpg'
                            title='jordan'
                        />
                        <CardContent>
                        <Grid container spacing={1}>
                                <Grid item xs={8} md={8}>
                                    <Typography variant="body1" color="primary" gutterBottom>
                                       Jordan MA2
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Typography variant="body1" color="primary" align="center" gutterBottom>
                                        $125
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body2" color="primary">
                                    Shoe
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.mediacard}
                            image='images/air.jpg'
                            title='nike air'
                        />
                        <CardContent>
                        <Grid container spacing={1}>
                                <Grid item xs={8} md={8}>
                                    <Typography variant="body1" color="primary" gutterBottom>
                                        Nike Air Force
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Typography variant="body1" color="primary" align="center" gutterBottom>
                                        $110
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body2" color="primary">
                                    Men's Shoe
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <News2 />
        </Container>
    )
}

export default News;

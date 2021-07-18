import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import News from './News';
import Navbar from './Navbar';

import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#fff',
        },
        warning: {
            main: '#32a852',
        },
        type: 'dark'
    },
    typography: {
        fontFamily: 'Garamond',
    },
    spacing: 8,

})

function Main() {

    return (
        <>
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <Switch>
                        <Route exact path='/Home' component={Home} />
                        <Route exact path='/News' component={News} />
                        <Redirect to='/home' />
                    </Switch>
                </ThemeProvider>
            </CssBaseline>
        </>
    );
}

export default Main;
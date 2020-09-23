import { Box, CSSReset, Grid, ThemeProvider } from '@chakra-ui/core';
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { createClient, Provider } from 'urql';

import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { RightBar } from './components/rightBar/RightBar';
import { About } from './models/about/About';
import { Main } from './models/main/Main';
import { Party } from './models/party/Party';
import { PlaylistPass } from './models/playlistPass/PlaylistPass';
import customTheme from './theme';

const client = createClient({ url: 'http://localhost:3700/graphql' });



function App() {

    let token = Cookies.get('token');
    let refresh_token = Cookies.get('refresh_token');
    const spotifyApi: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi();


    async function isAuth(token: string) {
        return await axios.post('http://localhost:3800/auth/isAuthorized', { token: token })
            .then(res => { return res.status === 200; })
            .catch(error => { return false; })
    }

    async function refreshSpotyfToken() {
        return await axios.post('http://localhost:3800/auth/refreshToken', { token: token, refresh_token: refresh_token })
            .then(res => {
                token = res.data.token;
                refresh_token = res.data.refresh_token;
                spotifyApi.setAccessToken(token!);
            })
            .catch(error => { console.log(error); return false; })
    }


    if (token === undefined || !isAuth(token === undefined ? '' : token)) {
        window.location.replace('http://localhost:3800/auth/spotifyLogin');
    } else {
        token = Cookies.get('token');
        refresh_token = Cookies.get('refresh_token');
        spotifyApi.setAccessToken(Cookies.get('token') || '');
        spotifyApi.searchTracks('Love').then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    }

    setInterval(async () => {
        refreshSpotyfToken();
    }, 3500 * 10);



    return (
        <ThemeProvider theme={customTheme}>
            <Router>
                <CSSReset />
                <Provider value={client}>
                    <Grid h='100vh' w='100vw' gridTemplateColumns='repeat(7,1fr)'
                        gridTemplateRows='repeat(9,1fr)' >
                        <Navbar />
                        <Box gridColumn='2 / 7' gridRow='span 8' backgroundColor='mainGrey'>
                            <Switch>
                                <Route exact path="/" component={Main} />
                                <Route exact path="/create" component={Main} />
                                <Route exact path="/join" component={Main} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/party/:id" component={() => <Party  />} />
                                <Route exact path="/pass" component={PlaylistPass} />
                            </Switch>
                        </Box>
                        <RightBar />
                        <Footer />
                    </Grid>
                </Provider>
            </Router>
        </ThemeProvider>
    );
}

export default App;

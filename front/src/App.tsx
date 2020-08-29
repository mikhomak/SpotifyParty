import React from 'react';
import './App.css';
import { Main } from "./models/main/Main";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { About } from "./models/about/About";
import { Party } from "./models/party/Party";
import { PlaylistPass } from './models/playlistPass/PlaylistPass';
import { RightBar } from './components/rightBar/RightBar';
import { Provider, createClient } from 'urql'
import { Grid, ThemeProvider, CSSReset, Box } from '@chakra-ui/core'
import customTheme from "./theme";
import Cookies from 'js-cookie';
import axios from 'axios';

const client = createClient({ url: 'http://localhost:3700/graphql' });



function App() {


    async function isAuth(token: string) {
        return await axios.post('/auth/isAuthtorized', { token: token })
            .then(res => { return res.status === 200; })
            .catch(error => { console.log(error); return false; })
    }

    const token: string | undefined = Cookies.get('token');

    let app = <Footer/>;

    if (token === undefined || !isAuth(token === undefined ? '' : token)) {
        app = <Box>oops</Box>;
    }


    return (
        <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Provider value={client}>
            <Router>
                <Grid h='100vh' w='100vw' gridTemplateColumns='repeat(7,1fr)'
                    gridTemplateRows='repeat(9,1fr)' >
                    <Navbar />
                    <Box gridColumn='2 / 7' gridRow='span 8' backgroundColor='mainGrey'>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/create" component={Main} />
                            <Route exact path="/join" component={Main} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/party/:id" component={Party} />
                            <Route exact path="/pass" component={PlaylistPass} />
                        </Switch>
                    </Box>
                    <RightBar />
                    {app}
                </Grid>
            </Router>
        </Provider>
    </ThemeProvider>
        );
}

export default App;

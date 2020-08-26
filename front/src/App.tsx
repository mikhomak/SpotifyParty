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
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from "./theme"


const client = createClient({ url: 'http://localhost:3700/graphql' });

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <Provider value={client}>
                <Router>
                    <Navbar />
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/create" component={Main} />
                            <Route exact path="/join" component={Main} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/party/:id" component={Party} />
                            <Route exact path="/pass" component={PlaylistPass} />
                        </Switch>
                    </div>
                    <RightBar />
                    <Footer />
                </Router>
            </Provider>
        </ThemeProvider>
    );
}

export default App;

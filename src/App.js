import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Game from './components/Game';
import Game9 from './components/Game9';
import GameAI from './components/GameAI';

function App() {
    
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/game9" element={<Game9 />} />
                <Route path="/gameAI" element={<GameAI />} />
            </Routes>
        </Router>
    )
}

export default App;
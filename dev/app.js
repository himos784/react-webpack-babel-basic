import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from "./components/Hello";

function App() {
    return (
        <div>
            <Hello name="Raymund" />
            <Hello name="Rayana" />
            <Hello name="Analene" />
        </div>
    );
}

const element = document.getElementById('app');
ReactDOM.render(<App />, element);

import { h, render } from 'preact';
import Router from 'preact-router';

import Code from './code';
import Home from './home';

const Main = () => (
    <Router>
        <Code path="/code" />
        <Home path="/" default />
    </Router>
);

render(<Main />, document.body);

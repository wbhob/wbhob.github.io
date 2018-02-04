import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Code from './code';
import Home from './home';

const Main = () => (
    <BrowserRouter>
        <div>
            <Route component={Home} path="/" exact={true} />
            <Route component={Code} path="/code" />
        </div>
    </BrowserRouter>
);

window.addEventListener("load", () => {
    console.log(document.getElementById('root'))
    ReactDOM.render(<Main />, document.getElementById('root') as HTMLElement);
})

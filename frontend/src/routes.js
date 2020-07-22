import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import pessoa from './pages/pessoas';
import listagem from './pages/listagem';
import edicao from './pages/edicao';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={pessoa} />
                <Route path="/listagem" component={listagem} />
                <Route path="/edicao" component={edicao} />
            </Switch>
        </BrowserRouter>
    );
}
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import HaveTodo from '../havetodo/havetodo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={HaveTodo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)

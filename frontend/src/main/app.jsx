import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import HaveTodo from '../havetodo/havetodo'
import About from '../about/about'

export default props => (
    <div className='container'>
        <HaveTodo />
        <About />
    </div>
)

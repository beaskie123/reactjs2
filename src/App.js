import React from 'react'
import { Switch , Route } from 'react-router-dom'

import Home from './components/Home'
import Todo from './components/Todo'

const App = () => {
    return (
    <div className='app-main'>
        <Switch>
            <Route path='/home' component ={Home}/>
            <Route path='/todo' component ={Todo} />
            <Route path='/' component={Home} />
        </Switch>
    </div>
    )
}

export default App
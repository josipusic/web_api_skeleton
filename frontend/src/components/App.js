import '../css/style.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header
 from "./Header"
import Cart from "./Cart"
import Photos from "./Photos"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/'><Photos /></Route>
                <Route path='/cart'><Cart /></Route>
            </Switch>
        </div>
    )
}

export default App

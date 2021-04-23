import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import Shop from './pages/shop/shop'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App

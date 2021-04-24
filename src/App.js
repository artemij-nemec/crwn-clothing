import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage/homepage'
import Shop from './pages/shop/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App

import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import './App.css'
import Header from './components/header/header'
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import Checkout from './pages/checkout/checkout'
import HomePage from './pages/homepage/homepage'
import Shop from './pages/shop/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDoc(user)
        userRef.onSnapshot(snapShot =>
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        )
      } else {
        setCurrentUser(user)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})
const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

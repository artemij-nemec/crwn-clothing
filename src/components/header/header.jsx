import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='options'>
          SHOP
        </Link>
        <Link to='/shop' className='options'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='options' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='options' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)

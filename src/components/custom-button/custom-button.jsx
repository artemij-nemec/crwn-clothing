import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => {
  const classes = ['custom-button']
  if (isGoogleSignIn) {
    classes.push('google-sign-in')
  }
  if (inverted) {
    classes.push('inverted')
  }

  return (
    <button className={classes.join(' ')} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton

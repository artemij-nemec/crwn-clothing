import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmin = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmin}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleSubmin}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleSubmin}
            required
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

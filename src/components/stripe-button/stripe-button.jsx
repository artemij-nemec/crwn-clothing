import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../assets/logo_for_stripe.svg'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51IoPQhLVzL5NKg0lcY0ZetfJkhpxGwuJpe49ycrKnrB5lAsK6Kt7NfkskASn8dbVuompUl7eUlgjmQhQIR4YS4gf001gMqBTex'
  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      panelLabel='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image={logo}
      description={`You total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton

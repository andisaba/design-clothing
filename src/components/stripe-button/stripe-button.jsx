import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JScwNJUiRmqJ2hDpU08I8C4pyesLgGJNwJhOF3wLgOvOmGBdelNy0v0DQrzcNtevP9spwbolG8duN5aWsPCS62M00C3A4vFo0';

const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Design Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
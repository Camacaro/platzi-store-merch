import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button'
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import'../styles/components/Payment.css';

const Payment = () => {

  const history = useHistory();
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'AdfbnwV2xo9BApCGYcfyTxf4LSGk8Ek8KKWGoZABRqaI2P-DPU-DjiciYN6IfaKPkJtS3_zAjQzQx-T2',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data) => {
    console.log('handlePaymentSuccess', data);
    if( data.status === "COMPLETED" ) {
      
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }

      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce( reducer, 0 );
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map( item => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4> 
                  {item.title} 
                </h4>
                <span>
                  $
                  {' '}
                  { item.price }
                </span>
              </div>
            </div>
          ) )
        }
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log('error', error)}
            onPaymentCancel={data => console.log('cancel', data)}
          />
        </div>
      </div>
      <div> </div>
    </div>
  )
}

export default Payment

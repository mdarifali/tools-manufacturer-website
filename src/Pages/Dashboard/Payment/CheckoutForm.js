import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (elements || !stripe) {
            
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`
              })
          } else {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations! Your Payment is Successful.',
                showConfirmButton: true,
                timer: 3500
            })
            console.log('[PaymentMethod]', paymentMethod);
          }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='float-left'>
            <button className='btn btn-success btn-outline mt-5' type="submit" disabled={!stripe}>
                Pay
            </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
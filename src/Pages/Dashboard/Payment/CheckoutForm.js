import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ orders }) => {
    // const [user] = useAuthState (auth);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    const { id, price, name } = orders;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (elements || !stripe) {

        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
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

        // setCardError(error?.message || '')
        // setSuccess('');
        // setProcessing(true);
        // // confirm card payment
        // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 name: name,
        //                 email: patient
        //             },
        //         },
        //     },
        
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
                <button className='btn btn-success btn-outline mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
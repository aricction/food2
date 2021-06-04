import React, { useEffect } from 'react';
import {Button} from 'reactstrap';

const shortid = require("shortid");

const PayByRazorPay = () => {
    const options = {
        key: 'your key',
        amount: '100', //  = INR 1
        name: 'Gorumet food&more',
        description: 'some description',
        order_id: '',
        receipt: shortid.generate(),
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert("your payment id is " + response.razorpay_payment_id);
            
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <Button onClick={openPayModal}>Pay with Razorpay</Button>
        </>
    );
};

export default PayByRazorPay;
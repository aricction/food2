import React, { useState } from "react";
import{Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import GooglePayButton from "@google-pay/button-react";
import PayByRazorPay from '../PayButton';

export default function Payment() {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "stripe"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "BCR2DN6TV6J4HUZJ",
      merchantName: "food and more"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };


  return (
    <div className='container'>
    <div className='row'>
    <div className='col'>
<p><h3>Payment Method</h3></p>
<hr/>
      <div className="demo">
        <GooglePayButton
          environment="TEST"

          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}

        />
      </div>
    

<hr/>
<PayByRazorPay/>  
<hr/>
<div className='radio1'>
      <FormGroup check>
      <Label check>
      <Input type="radio" value ="uncheck" name="radio1" />{'  '}
      Cash on Delivery
      </Label>
      </FormGroup>
</div>
<hr/>
</div>

</div>
    </div>
  );
}

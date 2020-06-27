import React from 'react';
import DynamicInput from "./dynamicInput";

const PaymentInput = ({idx, payment, handlePaymentChange, handleRemovePayment}) => {
  return <DynamicInput idx={idx}
                       label="Payments"
                       object={payment}
                       handleChange={handlePaymentChange}
                       handleRemove={handleRemovePayment}
                       namePlaceHolder='X Payment'
                       nameHelpText='Payment name'
                       amountHelpText='Annual amount'
                       prefix='annualPayment'/>;
};

export default PaymentInput;

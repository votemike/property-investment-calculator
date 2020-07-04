import {Fee, Finance, Payment, Property, Rental, Sale} from "@votemike/property";
import {buyerTypes, calculate, countries, propertyTypes} from "uk-ireland-stampduty-calculator";

const toMortgage = formData => {
  const mortgageFee = new Fee(parseFloat(formData.mortgageFee));
  return new Finance(parseFloat(formData.mortgageAmount), false, 0, parseFloat(formData.initialMortgageRate), [mortgageFee]);

};

const toProperty = formData => {
  const mortgage = toMortgage(formData);
  const payments = formData.annualPayments.map((object) => {
    return new Payment(parseFloat(object.amount), 'yearly');
  });
  const rental = new Rental(parseFloat(formData.rentalIncome), parseFloat(formData.lettingFee));

  return new Property(formData.name, [mortgage], payments, [rental]);
};

const toSale = formData => {
  const stampDuty = calculate(parseFloat(formData.price), propertyTypes.RESIDENTIAL, countries.ENGLAND, buyerTypes.INVESTOR).tax;
  const fees = formData.acquisitionFees.map((object) => {
    return new Fee(parseFloat(object.amount));
  });
  fees.push(new Fee(stampDuty));

  return new Sale(parseFloat(formData.price), fees);
};

export {
  toMortgage,
  toProperty,
  toSale
};

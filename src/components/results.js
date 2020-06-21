import React from 'react';
import {formatCurrency} from '../utilities/formatters';
import { buyerTypes, calculate, countries, propertyTypes } from "uk-ireland-stampduty-calculator";
import {Fee, Finance, Payment, Property, Rental, Sale} from '@votemike/property';

const Results = ({formData}) => {
  if (formData.name === undefined) {
    return null;
  }
  const stampDuty = calculate(parseFloat(formData.price), propertyTypes.RESIDENTIAL, countries.ENGLAND, buyerTypes.INVESTOR).tax;
  const fees = formData.acquisitionFees.map((object) => {
    return new Fee(parseFloat(object.amount));
  });
  fees.push(new Fee(parseFloat(stampDuty)));
  const sale = new Sale(parseFloat(formData.price), fees);
  const mortgageAmount = parseFloat(formData.estimatedFinalValue)*3/4;
  const rate = (parseFloat(formData.loanCosts) * 12 * 100) / mortgageAmount;
  const mortgageFee = new Fee(parseFloat(formData.mortgageFee));
  const mortgage = new Finance(mortgageAmount, false, 0, rate, [mortgageFee]);
  const insurance = new Payment(parseFloat(formData.insurance), 'monthly');
  const rental = new Rental(parseFloat(formData.rentalIncome), parseFloat(formData.lettingFee));
  const property = new Property(formData.name, [mortgage], [insurance], [rental]);
  const requiredMoney = sale.calculateTotalCosts() + parseFloat(formData.refurbCost) + parseFloat(formData.refurbLoanCosts) + mortgage.totalOneOffCosts;
  const moneyLeftIn = requiredMoney-mortgageAmount;
  const monthlyProfit = property.calculateMonthlyProfit();

  return (
    <div className="box">
      <h2 className="title is-3">Deal results</h2>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child notification is-primary is-light">
                <p className='title'>Required Money</p>
                <p className='subtitle'>{formatCurrency(requiredMoney)}</p>
              </div>
              <div className="tile is-child notification is-warning">
                <p className='title'>Final Value</p>
                <p className='subtitle'>{formatCurrency(formData.estimatedFinalValue)}</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child notification is-info">
                <p className='title'>Profit</p>
                <p className='subtitle'>{formatCurrency(parseFloat(formData.estimatedFinalValue) - requiredMoney)}</p>
              </div>
            </div>
          </div>
          <div className="tile">
            <div className="tile is-parent">
              <div className="tile is-child notification is-danger">
                <p className='title'>Mortgage Amount</p>
                <p className='subtitle'>{formatCurrency(mortgageAmount)}</p>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child notification is-info is-light">
                <p className='title'>{moneyLeftIn > 0 ? "Money Left In Deal" : "Money Pulled Out"}</p>
                <p className='subtitle'>{formatCurrency(Math.abs(moneyLeftIn))}</p>
              </div>
              <div className="tile is-child notification is-primary">
                <p className='title'>Monthly Cashflow</p>
                <p className='subtitle'>{formatCurrency(monthlyProfit)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child notification is-success">
            <p className="title">Yearly ROI</p>
            <p className="subtitle">{moneyLeftIn > 0 ? Math.round(100*monthlyProfit*12/moneyLeftIn) : "Infinite"}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results

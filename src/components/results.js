import React from 'react';
import {formatCurrency} from '../utilities/formatters';
import { buyerTypes, calculate, countries, propertyTypes } from "uk-ireland-stampduty-calculator";

const Results = ({formData}) => {
  if (formData.name === undefined) {
    return null;
  }
  const stampDuty = calculate(parseFloat(formData.price), propertyTypes.RESIDENTIAL, countries.ENGLAND, buyerTypes.INVESTOR).tax;
  const requiredMoney = parseFloat(formData.price) + parseFloat(formData.solicitorFee) + parseFloat(formData.surveyFee) + parseFloat(formData.landRegistryFee) + parseFloat(formData.refurbCost) + parseFloat(formData.refurbLoanCosts) + parseFloat(formData.mortgageFee) + parseFloat(stampDuty);
  const mortgageAmount = parseFloat(formData.estimatedFinalValue)*3/4;
  const moneyLeftIn = requiredMoney-mortgageAmount;
  const monthlyProfit = (parseFloat(formData.rentalIncome)*(1-(parseFloat(formData.lettingFee)/100))) - parseFloat(formData.loanCosts) - parseFloat(formData.insurance);
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
                <p className='title'>Money Left In Deal</p>
                <p className='subtitle'>{formatCurrency(moneyLeftIn)}</p>
              </div>
              <div className="tile is-child notification is-primary">
                <p className='title'>Monthly Profit</p>
                <p className='subtitle'>{formatCurrency(monthlyProfit)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child notification is-success">
            <p className="title">Yearly Yield</p>
            <p className="subtitle">{Math.round(100*monthlyProfit*12/moneyLeftIn)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results

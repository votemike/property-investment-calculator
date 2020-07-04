import React, {useState} from "react";
import {formatCurrency} from "../utilities/formatters";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import {toMortgage, toProperty, toSale} from "../utilities/formDataMolder";

const InvestorPack = ({formData}) => {
  const [image, setImage] = useState('');

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  const printPDF = () => {
    const element = document.getElementById('pdf-container');
    import("dom-to-pdf").then(domToPdf => {
      domToPdf.default(element, {});
    });
  };

  const sale = toSale(formData);
  const mortgage = toMortgage(formData);
  const property = toProperty(formData);
  const requiredMoney = sale.calculateTotalCosts() + parseFloat(formData.refurbCost) + parseFloat(formData.refurbLoanCosts) + mortgage.totalOneOffCosts;
  const mortgageAmount = parseFloat(formData.mortgageAmount);
  const moneyLeftIn = requiredMoney-mortgageAmount;
  const monthlyProfit = property.calculateMonthlyProfit();
  const saleFeesTotal = sale.fees.reduce(function(prev, cur) {
    return prev + cur.amount;
  }, 0);
  const mortgageFeesTotal = mortgage.fees.reduce(function(prev, cur) {
    return prev + cur.amount;
  }, 0);
  const feesTotal = saleFeesTotal + mortgageFeesTotal;

  const [blurb, setBlurb] = useState(`${property.name} is a property that should be able to generate ${Math.round(100*monthlyProfit*12/moneyLeftIn)}% yearly return on an amount of ${formatCurrency(moneyLeftIn)} left in the deal.\nWith a price of ${formatCurrency(parseFloat(formData.price))}, fees of ${formatCurrency(feesTotal)} and refurbishment costs of ${formatCurrency(parseFloat(formData.refurbCost) + parseFloat(formData.refurbLoanCosts))}, the total amount of money required is ${formatCurrency(requiredMoney)}. The property has an estimated refurbished value of ${formatCurrency(formData.estimatedFinalValue)}.\nA 75% LTV mortgage of ${formatCurrency(mortgageAmount)} would mean ${formatCurrency(moneyLeftIn)} is left in the deal.\nMonthly profit after fees and costs should be ${formatCurrency(monthlyProfit)}; leading to a yearly ROI of ${Math.round(100*monthlyProfit*12/moneyLeftIn)}%.`);

  const handleBlurbChange = (event) => {
    setBlurb(event.target.value);
  }

  return (
    <>
      <section className="section pt-5">
        <div className="container">
          <header>
            <h1 className="title is-1">Generate Investor Pack</h1>
          </header>
          <p className="mb-4">Upload your logo and write a blurb about the property in order to generate a PDF to hand out to potential investors.</p>
          <div className="box">
            <h2 className="title is-3">Generate Investor Pack</h2>
            <div className="field">
              <div className="file is-info">
                <label className="file-label">
                  <input className="file-input" type="file" name="resume" onChange={handleChange}/>
                  <span className="file-cta">
                    <span className="file-icon">
                      <FontAwesomeIcon icon={faUpload} />
                    </span>
                    <span className="file-label">
                      Upload your logo…
                    </span>
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Property Blurb" value={blurb} onChange={handleBlurbChange}/>
              </div>
            </div>
          </div>
          <div className="box">
            <div id="pdf-container" className='section'>
              {image && <img src={image} style={{maxWidth: '100%', maxHeight: '90px', margin: '10px auto', display: 'block'}} alt='logo'/>}
              <div className='tile is-ancestor'>
                <div className='tile is-vertical is-parent is-size-5 is-8'>
                  <div className='tile is-vertical'>
                    <h2 className='title'>{property.name}</h2>
                    {blurb.split('\n').map((line, i) => {
                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                </div>
                <div className='tile is-parent is-vertical'>
                  <div className="tile is-child notification is-primary is-light">
                    <h2 className='title'>Required Money</h2>
                    <p className='subtitle'>{formatCurrency(requiredMoney)}</p>
                  </div>
                  <div className="tile is-child notification is-warning">
                    <h2 className='title'>Final Value</h2>
                    <p className='subtitle'>{formatCurrency(formData.estimatedFinalValue)}</p>
                  </div>
                  <div className="tile is-child notification is-info">
                    <h2 className='title'>Profit</h2>
                    <p className='subtitle'>{formatCurrency(parseFloat(formData.estimatedFinalValue) - requiredMoney)}</p>
                  </div>
                  <div className="tile is-child notification is-danger">
                    <h2 className='title'>Mortgage Amount</h2>
                    <p className='subtitle'>{formatCurrency(mortgageAmount)}</p>
                  </div>
                  <div className="tile is-child notification is-info is-light">
                    <h2 className='title'>{moneyLeftIn > 0 ? "Money Left In Deal" : "Money Pulled Out"}</h2>
                    <p className='subtitle'>{formatCurrency(Math.abs(moneyLeftIn))}</p>
                  </div>
                  <div className="tile is-child notification is-primary">
                    <h2 className='title'>Monthly Cashflow</h2>
                    <p className='subtitle'>{formatCurrency(monthlyProfit)}</p>
                  </div>
                  <div className="tile is-child notification is-success">
                    <h2 className="title">Yearly ROI</h2>
                    <p className="subtitle">{moneyLeftIn > 0 ? Math.round(100*monthlyProfit*12/moneyLeftIn) : "Infinite"}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={printPDF} className="button is-primary">
            Download PDF
          </button>
        </div>
      </section>
    </>
  );
};

export default InvestorPack;

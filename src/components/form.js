import React from 'react';
import FeeInput from "./feeInput";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialFormState();
    this.handleAddFee = this.handleAddFee.bind(this);
    this.handleFeeChange = this.handleFeeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRemoveFee = this.handleRemoveFee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialFormState() {
    const defaultAcquisitionFees = [
      {name: 'Bank Transfer Fee', amount: ''},
      {name: 'Broker Fee', amount: ''},
      {name: 'Land Registry Fee', amount: ''},
      {name: 'Solicitor Fee', amount: ''},
      {name: 'Sourcing Fee', amount: ''},
      {name: 'Survey Fee', amount: ''},
    ];
    return {name: '', price: '', acquisitionFees: defaultAcquisitionFees, refurbCost: '', refurbLoanCosts: '', estimatedFinalValue: '', loanCosts: '', mortgageFee: '', rentalIncome: '', lettingFee: '', insurance: ''};
  }

  handleAddFee() {
    this.setState({'acquisitionFees': [...this.state.acquisitionFees, {name: '', amount: ''}]});
  }

  handleFeeChange(event) {
    const updatedFees = [...this.state.acquisitionFees];
    updatedFees[event.target.dataset.idx][event.target.dataset.name] = event.target.value;
    this.setState({'acquisitionFees': updatedFees});
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleRemoveFee(event) {
    const updatedFees = [...this.state.acquisitionFees];
    updatedFees.splice(event.target.dataset.idx, 1);
    this.setState({'acquisitionFees': updatedFees});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.formHandler(this.state);
  }

  render() {
    return (
      <div className="box">
        <h2 className="title is-3">Enter the deal info</h2>
        <form onSubmit={this.handleSubmit}>
          <h3 className="subtitle is-4">Property Info</h3>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Property Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Downing Street" required/>
                </div>
                <p className="help">
                  Give this property a label
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Price</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="price" value={this.state.price} onChange={this.handleInputChange} type="number" step="any" placeholder="295000" id="price" required/>
                </div>
                <p className="help">
                  The price you will buy the property for
                </p>
              </div>
            </div>
          </div>
          {this.state.acquisitionFees.map((fee, idx) => {
            return <FeeInput idx={idx} fee={fee} handleFeeChange={this.handleFeeChange} handleRemoveFee={this.handleRemoveFee}/>
          })}
          <div className="field is-horizontal">
            <div className="field-label">
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="button"
                    type="button"
                    value="Add extra fee"
                    onClick={this.handleAddFee}
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="subtitle is-4">Refurb Info</h3>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Refurb Cost</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="refurbCost" value={this.state.refurbCost} onChange={this.handleInputChange} type="number" step="any" placeholder="17000" id="refurbCost" required/>
                </div>
                <p className="help">
                  How much will need to be spent on the property
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Loan Costs</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="refurbLoanCosts" value={this.state.refurbLoanCosts} onChange={this.handleInputChange} type="number" step="any" placeholder="1200" id="refurbLoanCosts" required/>
                </div>
                <p className="help">
                  How much will the interest on any loans during the refurbishment cost?
                </p>
              </div>
            </div>
          </div>
          <h3 className="subtitle is-4">End Result Info</h3>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Estimated Final Value</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="estimatedFinalValue" value={this.state.estimatedFinalValue} onChange={this.handleInputChange} type="number" step="any" placeholder="350000" id="estimatedFinalValue" required/>
                </div>
                <p className="help">
                  What is the estimated final value for the property after refurbishment?
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Mortgage Cost</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="loanCosts" value={this.state.loanCosts} onChange={this.handleInputChange} type="number" step="any" placeholder="250" id="loanCosts" required/>
                </div>
                <p className="help">
                  How much will the mortgage payments cost each month?
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Mortgage Fee</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="mortgageFee" value={this.state.mortgageFee} onChange={this.handleInputChange} type="number" step="any" placeholder="995" id="mortgageFee" required/>
                </div>
                <p className="help">
                  How much will the mortgage arrangement fee be?
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Rental Income</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="rentalIncome" value={this.state.rentalIncome} onChange={this.handleInputChange} type="number" step="any" placeholder="750" id="rentalIncome" required/>
                </div>
                <p className="help">
                  What is the expected monthly rental income?
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Letting Fee</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="lettingFee" value={this.state.lettingFee} onChange={this.handleInputChange} type="number" step="any" placeholder="9" id="lettingFee" required/>
                </div>
                <p className="help">
                  What percentage is the letting fee?
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Insurance</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="insurance" value={this.state.insurance} onChange={this.handleInputChange} type="number" step="any" placeholder="35" id="insurance" required/>
                </div>
                <p className="help">
                  How much will any insurance cost each month?
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label"/>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form

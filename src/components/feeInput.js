import React from 'react';

const renderLabel = (idx) => {
  if (idx > 0) {
    return <div className="field-label"></div>
  }

  return (
    <div className="field-label is-normal">
      <label className="label">Fees</label>
    </div>
  );
};

const renderRemoveButton = (idx, handleRemoveFee) => {
  if (idx > 0) {
    return <input className="button is-danger" type="button" value="Remove" data-idx={idx + 1}
                  onClick={handleRemoveFee}/>
  }

  return <input className="button is-danger" type="button" value="Remove" disabled="disabled"/>
};

const FeeInput = ({idx, fee, handleFeeChange, handleRemoveFee}) => {
  const nameId = `acquisitionFee-name-${idx + 1}`;
  const amountId = `acquisitionFee-amount-${idx + 1}`;
  return (<div className="field is-horizontal" key={`acquisitionFee-${idx + 1}`}>
    {renderLabel(idx)}
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input className="input" name={nameId} value={fee.name} onChange={handleFeeChange} type="text"
                 placeholder="X Fee" id={nameId} data-idx={idx + 1} data-name="name" required/>
        </div>
        <p className="help">
          Fee name
        </p>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" name={amountId} value={fee.amount} onChange={handleFeeChange} type="number"
                 step="any" placeholder="0" id={amountId} data-idx={idx + 1} data-name="amount" required/>
        </div>
        <p className="help">
          Fee amount
        </p>
      </div>
      <div className="field">
        <div className="control">
          {renderRemoveButton(idx, handleRemoveFee)}
        </div>
      </div>
    </div>
  </div>);
};

export default FeeInput;

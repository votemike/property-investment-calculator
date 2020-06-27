import React from 'react';

const renderLabel = (idx, label) => {
  if (idx > 0) {
    return <div className="field-label"></div>
  }

  return (
    <div className="field-label is-normal">
      <label className="label">{label}</label>
    </div>
  );
};

const renderRemoveButton = (idx, handleRemove) => {
  if (idx > 0) {
    return <input className="button is-danger" type="button" value="Remove" data-idx={idx} onClick={handleRemove}/>
  }

  return <input className="button is-danger" type="button" value="Remove" disabled="disabled"/>
};

const DynamicInput = ({idx, label, object, handleChange, handleRemove, namePlaceHolder, nameHelpText, amountHelpText, prefix}) => {
  const nameId = `${prefix}-name-${idx}`;
  const amountId = `${prefix}-amount-${idx}`;
  return (<div className="field is-horizontal">
    {renderLabel(idx, label)}
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input className="input" name={nameId} value={object.name} onChange={handleChange} type="text"
                 placeholder={namePlaceHolder} id={nameId} data-idx={idx} data-name="name" required/>
        </div>
        <p className="help">
          {nameHelpText}
        </p>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" name={amountId} value={object.amount} onChange={handleChange} type="number"
                 step="any" placeholder="0" id={amountId} data-idx={idx} data-name="amount" required/>
        </div>
        <p className="help">
          {amountHelpText}
        </p>
      </div>
      <div className="field">
        <div className="control">
          {renderRemoveButton(idx, handleRemove)}
        </div>
      </div>
    </div>
  </div>);
};

export default DynamicInput;

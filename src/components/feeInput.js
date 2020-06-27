import React from 'react';
import DynamicInput from "./dynamicInput";

const FeeInput = ({idx, fee, handleFeeChange, handleRemoveFee}) => {
  return <DynamicInput idx={idx}
                       label="Fees"
                       object={fee}
                       handleChange={handleFeeChange}
                       handleRemove={handleRemoveFee}
                       namePlaceHolder='X Fee'
                       nameHelpText='Fee name'
                       amountHelpText='Fee amount'
                       prefix='acquisitionFee'/>;
};

export default FeeInput;

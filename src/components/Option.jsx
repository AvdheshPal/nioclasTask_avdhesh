import React, { useState } from 'react';

function MathOptions({ options, handleOptionChange, selectedOption }) {
  
  return (

    <div className="options" >
      {options.map((option) => (
        <div  key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="answer"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          &nbsp;
          <label htmlFor={option.value}>{option.value}</label>
        </div>
      ))}
    </div>

  );
}

export default MathOptions;

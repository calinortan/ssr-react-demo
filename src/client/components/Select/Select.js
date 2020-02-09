import React, { useRef, useEffect } from "react";

const Select = ({ className, data = [], onChange, selectedOption }) => {
  const selectContainer = useRef();

  let selectInstance;

  useEffect(() => {
    selectInstance = M.FormSelect.init(selectContainer.current);
    return () => selectInstance.destroy();
  });

  const optionsElement = data.map(option => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  });

  return (
    <select
      ref={selectContainer}
      className={className}
      onChange={e => onChange(e.target.value)}
      value={selectedOption}
    >
      <option value="" disabled>
        Choose your option
      </option>
      {optionsElement}
    </select>
  );
};

export default Select;

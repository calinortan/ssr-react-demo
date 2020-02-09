import React, { useRef, useEffect } from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import styles from "./ChipsSelector.css";

const ChipsSelector = ({ className, data = [], onChange, label }) => {
  useStyles(styles);
  const chipsContainer = useRef();

  let chipsInstance;

  const handleChipsChange = () => {
    onChange(chipsInstance.chipsData);
  };

  useEffect(() => {
    chipsInstance = M.Chips.init(chipsContainer.current, {
      data,
      onChipAdd: handleChipsChange,
      onChipDelete: handleChipsChange
    });
  });

  return (
    <div className={`input-field col s12 ${className}`} ref={chipsContainer} />
  );
};

export default ChipsSelector;

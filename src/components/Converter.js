import './converter.css'
import { useState } from 'react';

const UnitControl = () => (
  <div className="unit-control">
    <div className="unit">Mbps</div>
    <span className="exchange-icon fa-fw fa-stack">
      <i className="far fa-circle fa-stack-2x" />
      <i className="fas fa-exchange-alt fa-stack-1x" />
    </span>
    <div className="unit">MB/s</div>
  </div>
);

const CardFooter = ({inputValue}) => {
  let criteria;
  if (!inputValue) {
    criteria = {
      title: "---",
      backgroundColor: "#d3d8e2"
    };
  } else if (inputValue < 15) {
    criteria = {
      title: "SLOW",
      backgroundColor: "#ee362d"
    };
  } else if (inputValue < 40) {
    criteria = {
      title: "GOOD",
      backgroundColor: "#1b82f1"
    };
  } else if (inputValue >= 40) {
    criteria = {
      title: "FAST",
      backgroundColor: "#13d569"
    };
  }

  return (
    <div
      className="card-footer"
      style={{
        backgroundColor: criteria.backgroundColor
      }}
    >
      {criteria.title}
    </div>
  );
};

const SpeedConverter = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input
              type="number"
              onChange={handleInputChange}
              value={inputValue}
              className="input-number"
              min="0"
            />
          </div>
          <span
            className="angle-icon fa-2x"
            style={{
              marginTop: 30
            }}
          >
            <i className="fas fa-angle-right" />
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              className="input-number text-right"
              type="text"
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
};

export default SpeedConverter
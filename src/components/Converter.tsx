import React, { useState, useEffect } from 'react'
import CardFooter from './CardFooter.tsx'
import UnitControl from './UnitControl.tsx'
import './converter.css'

const SpeedConverter = () => {
  const [inputValue, setInputValue] = useState<number | string>(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInputValue(+(value) || '')
  }

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
              value={Number(inputValue) / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  )
}

export default SpeedConverter
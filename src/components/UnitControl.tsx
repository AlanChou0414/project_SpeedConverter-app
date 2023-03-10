import React from "react"

const UnitControl = () => {
  return (
    <div className="unit-control">
      <div className="unit">Mbps</div>
      <span className="exchange-icon fa-fw fa-stack">
        <i className="far fa-circle fa-stack-2x" />
        <i className="fas fa-exchange-alt fa-stack-1x" />
      </span>
      <div className="unit">MB/s</div>
    </div>
  )
}


export default UnitControl
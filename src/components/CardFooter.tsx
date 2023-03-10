import React, { useState, useEffect } from 'react'

interface Props {
  inputValue: number | string
}

const CardFooter = ({ inputValue }: Props) => {
  const [criteria, setCriteria] = useState<CriteriaType>()

  interface CriteriaType {
    title: string
    backgroundColor: string
  }

  useEffect(() => {
    if (inputValue === 0) {
      setCriteria({
        title: "---",
        backgroundColor: "#d3d8e2"
      })
    } else if (+(inputValue) < 15) {
      setCriteria({
        title: "SLOW",
        backgroundColor: "#ee362d"
      })
    } else if (+(inputValue) < 40) {
      setCriteria({
        title: "GOOD",
        backgroundColor: "#1b82f1"
      })
    } else if (+(inputValue) >= 40) {
      setCriteria({
        title: "FAST",
        backgroundColor: "#13d569"
      })
    }
  }, [inputValue])

  return (
    <div
      className="card-footer"
      style={{
        backgroundColor: criteria?.backgroundColor
      }}
    >
      {criteria?.title}
    </div>
  )
}

export default CardFooter
import React from 'react'

const Row = ({data})=> {
  return (
    <tr>
        <td>{data.year}</td>
        <td>{data.savingsEndOfYear}</td>
        <td>{data.yearlyInterest}</td>
        <td>{data.totalInterest}</td>
        <td>{data.investedCapital}</td>
      </tr>
  )
}


export default Row
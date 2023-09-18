import React, { useState } from 'react'
import styles from './Results.module.css'
import calculate from '../../utils/Calculator'
import TableHeader from './components/TableHeader'
import Row from './components/Row'


const Results = (props) => {


  const results = props.data;

  return (
    <table className={styles["result"]}>
    <TableHeader />
    <tbody>
      {results.map((result)=> <Row data={result} />)}
    </tbody>
  </table>
  )
}

export default Results
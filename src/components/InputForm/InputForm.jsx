import React, { useState } from 'react'
import styles from './InputForm.module.css'

const InputForm = (props) => {

  const [formData, setFormData] = useState({
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0
  });


  const inputHandler = event => {

    switch (event.target.id) {
      case "current-savings": {
        setFormData(prevData => { return { ...prevData, currentSavings: event.target.value } })
        break;
      }
      case "yearly-contribution": {
        setFormData(prevData => { return { ...prevData, yearlyContribution: event.target.value } })
        break;
      }
      case "expected-return": {
        setFormData(prevData => { return { ...prevData, expectedReturn: event.target.value } })
        break;
      }
      case "duration": {
        setFormData(prevData => { return { ...prevData, duration: event.target.value } })
        break;
      }
    }
  }


  const submissionHandler = (event) => {
    event.preventDefault();

    props.onCalculate(formData, false);
  }

  const resetFeilds = () => {
    setFormData({
      currentSavings: 0,
      yearlyContribution: 0,
      expectedReturn: 0,
      duration: 0,
    });
    props.onCalculate(formData, true);
  }


  return (
    <form className={styles["form"]} onSubmit={submissionHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input type="number" id="current-savings" value={formData.currentSavings} onInput={inputHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
          <input type="number" id="yearly-contribution" value={formData.yearlyContribution} onInput={inputHandler} />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={formData.expectedReturn} onInput={inputHandler} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={formData.duration} onInput={inputHandler} />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]} onClick={resetFeilds}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>

  )
}

export default InputForm
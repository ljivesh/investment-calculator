const calculate = (userInput) => {
  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  // console.log(userInput)

  const yearlyData = []; // per-year results

  let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
  let investedCapital = +userInput.currentSavings;
  let totalInterest = 0;
  const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput.expectedReturn / 100;
  const duration = +userInput.duration;

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    investedCapital += yearlyContribution;
    totalInterest +=yearlyInterest;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest.toFixed(2),
      savingsEndOfYear: currentSavings.toFixed(2),
      investedCapital: investedCapital.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  }

  // do something with yearlyData ...
  return yearlyData;
};

export default calculate;
import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';
import _ from 'lodash';
import calculate from './utils/Calculator';


function App() {

  
  const [data, setData] = useState({});
  const [isClear, setIsClear] = useState(true);
  

  const calculateHandler = (userInput, clearStatus)=> {
    
    setData(calculate(userInput));
    setIsClear(clearStatus);
  }; 

  return (
    <div>
      {/* Header Component*/}
      <Header />
      {/* Form Component */}
      <InputForm onCalculate= {calculateHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {/* Results */}

      {isClear ? <span>(No results to show)</span> : <Results data={data} />}
    </div>
  );
}

export default App;

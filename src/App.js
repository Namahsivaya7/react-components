import './App.css';
import BmiCalculator from './Bmi-calculator';
import Census from './Census';
import Censusfunction from './Censusfunction';
import Calculator, { CalculatorFn } from './React-Calculator';
import IntrestCalc from './SimpleIntrestCalculator';

function App() {
  return (
    <div className="App">
      {/* <Census /> */}
      {/* <Censusfunction/> */}
      {/* <CalculatorFn /> */}
      <IntrestCalc/>
      {/* <BmiCalculator/> */}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import ResultTable from "./ResultTable";
import calculateInvestmentResults from "../util/investment";


export default function InvestmentCalculator() {

  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
  });

  const investmentResult = calculateInvestmentResults(investmentData);

  const handleCalculatorInputsChange = (e) => {
    const investmentsInputValue = Number(e.target.value);
    const investmentsInputName = e.target.id;

    setInvestmentData((prevState) => ({
      ...prevState,
      [investmentsInputName]: investmentsInputValue,
    }));
  };

  const inputIsValid = investmentData.duration > 0 && investmentData.expectedReturn > 0 && investmentData.annualInvestment > 0 && investmentData.initialInvestment > 0

  return (
    <>
      <Header />
      <Calculator handleCalculatorInputsChange={handleCalculatorInputsChange} investmentData={investmentData} />
      {!inputIsValid && <p className="center">Input data is invalid!</p>}
      {inputIsValid && <ResultTable investmentResult={investmentResult} investmentData={investmentData} />}
    </>
  );
}

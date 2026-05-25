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


  return (
    <>
      <Header />
      <Calculator handleCalculatorInputsChange={handleCalculatorInputsChange} investmentData={investmentData} />
      <ResultTable investmentResult={investmentResult} investmentData={investmentData} />
    </>
  );
}

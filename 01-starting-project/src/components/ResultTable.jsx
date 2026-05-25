import { formatter } from "../util/investment";

export default function ResultTable({ investmentResult, investmentData }) {
  const { initialInvestment, expectedReturn, duration, annualInvestment } = investmentData;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResult.map(
            ({
              annualInvestment,
              interest,
              valueEndOfYear,
              year,
            } = results) => {

              const investedCapital =
                initialInvestment + annualInvestment * year;

              const totalInterest = valueEndOfYear - investedCapital;

              return (
                <tr key={year}>
                  <td>{year}</td>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(investedCapital)}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </>
  );
}

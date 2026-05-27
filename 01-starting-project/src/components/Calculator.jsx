import { useState, useEffect } from "react";

export default function Calculator({
  handleCalculatorInputsChange,
  investmentData,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            INITIAL INVESTMENT
            <input
              type="number"
              id="initialInvestment"
              value={investmentData.initialInvestment}
              onChange={(event) => handleCalculatorInputsChange(event)}
              required
            />
          </label>
        </p>
        <p>
          <label>
            ANNUAL INVESTMENT
            <input
              type="number"
              id="annualInvestment"
              value={investmentData.annualInvestment}
              onChange={(event) => handleCalculatorInputsChange(event)}
              required
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            EXPECTED RETURN
            <input
              type="number"
              id="expectedReturn"
              value={investmentData.expectedReturn}
              onChange={(event) => handleCalculatorInputsChange(event)}
              required
            />
          </label>
        </p>
        <p>
          <label>
            DURATION
            <input
              type="number"
              id="duration"
              value={investmentData.duration}
              onChange={(event) => handleCalculatorInputsChange(event)}
              required
            />
          </label>
        </p>
      </div>
    </section>
  );
}

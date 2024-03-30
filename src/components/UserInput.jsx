import { useState } from "react"

export default function UserInput({ userInput, onChange }) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" name="" id="initialInvestment" required value={userInput.initialInvestment} onChange={(e) => onChange(e.target.id, e.target.value)} />
            </p>
            <p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input type="number" name="" id="annualInvestment" required value={userInput.annualInvestment} onChange={(e) => onChange(e.target.id, e.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expectedReturn">Expected Return</label>
                <input type="number" name="" id="expectedReturn" required value={userInput.expectedReturn} onChange={(e) => onChange(e.target.id, e.target.value)} />
            </p>
            <p>
                <label htmlFor="duration">Duration</label>
                <input type="number" name="" id="duration" required value={userInput.duration} onChange={(e) => onChange(e.target.id, e.target.value)} />
            </p>
        </div>
    </section>
}
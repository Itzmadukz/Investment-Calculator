import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        intialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleUserInput(inputIdentifier, newValue) {
        setUserInput(prevUserinput => {
            return {
                ...prevUserinput,
                [inputIdentifier]: newValue
            }
        })
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" name="" id="intialInvestment" required value={userInput.intialInvestment} onChange={(e) => { handleUserInput(e.target.id, e.target.value) }} />
            </p>
            <p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input type="number" name="" id="annualInvestment" required value={userInput.annualInvestment} onChange={(e) => { handleUserInput(e.target.id, e.target.value) }} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expectedReturn">Expected Return</label>
                <input type="number" name="" id="expectedReturn" required value={userInput.expectedReturn} onChange={(e) => { handleUserInput(e.target.id, e.target.value) }} />
            </p>
            <p>
                <label htmlFor="duration">Duration</label>
                <input type="number" name="" id="duration" required value={userInput.duration} onChange={(e) => { handleUserInput(e.target.id, e.target.value) }} />
            </p>
        </div>
    </section>
}
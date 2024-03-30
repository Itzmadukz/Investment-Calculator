import { useState } from "react"
import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput(prevUserinput => {
      return {
        ...prevUserinput,
        [inputIdentifier]: +newValue // or parseInt(newValue)
      }
    })
  }

  const inputIsValid = userInput.duration >= 1 && userInput.duration <= 100

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {inputIsValid ? <Results input={userInput} /> 
      : <p className="center">Enter duration greater then 0 and less than 100</p>}
    </>
  )
}

export default App

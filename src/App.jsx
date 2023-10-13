import { useState } from 'react'
import AverageCalculatorComponent from '../components/averageCalc'
import DateIntervalCalculatorComponent from '../components/dateInterval'
import DynamicInputShuffleComponent from '../components/FantasyFootballDraftShuffle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JavaScript components</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>Average Calculator</h2>
        <AverageCalculatorComponent />
      </div>
      <div>
        <h2>Date Interval Calculator</h2>
        <DateIntervalCalculatorComponent />
      </div>
      <div>
        <h2>Fantasy Football Draft Team Shuffle</h2>
        <DynamicInputShuffleComponent />
      </div>
    </>
  )
}

export default App

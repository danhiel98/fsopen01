import { useState } from 'react'

const StatisticsLine = (props) => (
  <>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </>
)

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const totalReviews = good + neutral + bad
  const averageScore = totalReviews ? (good - bad) / totalReviews : 0
  const positivePercentage = totalReviews ? good / totalReviews * 100 : 0

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticsLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticsLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticsLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticsLine text="all" value={totalReviews} />
          </tr>
          <tr>
            <StatisticsLine text="average" value={averageScore} />
          </tr>
          <tr>
            <StatisticsLine text="positive" value={positivePercentage + " %"} />
          </tr>
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App

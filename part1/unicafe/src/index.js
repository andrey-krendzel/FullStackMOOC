import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{
  return(
  <button onClick={props.handleClick}>{props.text}</button>
  );
}

const Statistic = (props) =>{
  return(
    <tr><td>{props.text}</td> <td>{props.value}</td></tr>
  );
}

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad

  if(all === 0){
    return(
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <table>
    <Statistic text="Good" value={props.good}></Statistic>
    <Statistic text="Neutral" value={props.neutral}></Statistic>
    <Statistic text="Bad" value={props.bad}></Statistic>
    <Statistic text="All" value={props.good+props.neutral+props.bad}></Statistic>
    <Statistic text="Average" value={props.neutral*0+props.good*1+props.bad*-1/(props.good+props.neutral+props.bad)}></Statistic>
    <Statistic text="Positive" value={props.good*100/(props.good+props.neutral+props.bad)} /><p>%</p>
    </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/> 
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/> 
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/> 

      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
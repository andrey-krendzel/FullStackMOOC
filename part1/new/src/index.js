import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )

}




const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = (props) => {
  const [value, setValue] = useState(10)


  const handleClick = () =>{
  console.log('clicked the button')
  setValue(0)}

  return (
    <div>
      {value}
      <Button handleClick={handleClick} text="Reset"/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)





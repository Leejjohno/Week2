import './index.css'
import {useState} from 'react'
import createNumbers from './components/numbers'
import Symbols from './components/Symbols'

// import eval from 'mathjs'

// function App() {

// 	const [calculate, setCalculate] = useState(""); //display calculation
// 	const [numberString, setNumberString] = useState(""); //display history

// 	const updateCalculatorScreen = value => {
// 		const symbols = createSymbols()
// 		if (
// 			(symbols.includes(value) && calculate === '') ||                      //if the number string is an operator and we haven't got a value to calculate... or
// 			(symbols.includes(value) && symbols.includes(calculate.slice(-1)))    //if the value is an operator and the last value was also an operator...
// 		) { return; // then return nothing 
// 		} 
		
// 		setCalculate(calculate + value); // function associated with calculate value adds the two numbers together as a string.

// 		if (symbols.includes("=")) {
// 			setNumberString(eval(calculate + value).toString)
// 		}
// 	}

// 			return (
// 				<div className="App">
// 					<div className="calculator">
// 						<div className="display"> 
// 							{ <div> {calculate} </div> }
// 						</div>
// 						{createSymbols}
// 						{createNumbers}
// 					</div>
// 				</div>
// 			)
// 		}

import React from 'react'

export const App = () => {
	const wordArray = ["apples", "betty", "charles"]
	const name = "Batman"
  return (
	<div>
		<Symbols wordArray={wordArray} name={name}/>
	</div>
  )
}


export default App;

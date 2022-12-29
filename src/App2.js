

import React from 'react'
import { useState } from 'react'

const App2 = () => {

  const [arrNum, setArrNum] = useState([1,2,3,4])

  function getSum(arr) {
    let sum = 0;

    for (const el of arr) {
      sum += el
    }
    return sum / arr.length
  }

  function changeHandler(index, event) {
    setArrNum([...arrNum.slice(0, index), +event.target.value, ...arrNum.slice(index + 1)])
  }

  const result = arrNum.map((elem, index) => {
    return (
      <div key={index}>
        <input  value={elem} onChange={(event) => changeHandler(index, event)}></input> <br />  
      </div>
    )
  })

  return (
    <div className='App'>
      
      {result}
     <br />
     Среднее арифметическое:     
     <b>{getSum(arrNum)}</b>

      
    </div>
  )
}

export default App2

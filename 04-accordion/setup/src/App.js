import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  //iterate over all qn
  //display single Question
  const [index, setIndex] = useState(0)

  return(
    <div className = 'container'>
      <h3>Questions And Answers About Login</h3>
      <section className = 'info'>
        {data.map((question)=>{
          return <SingleQuestion key = {question.id} {...question}/>
        })}
      </section>
    </div>
  )
}

export default App;

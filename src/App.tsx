import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { COLOUR_CODES } from './scripts/ENUMS'
import getRandomInt from './scripts/getRandomInt'

const ColourCodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32px);
  grid-template-rows: 1;

  height: 32px;
`

const ColourBoxStyled = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-style: solid;
  border-width: 0.5px;
`

function App() {
  const [c1, setC1] = useState(0)
  const [c2, setC2] = useState(0)
  const [m, setM] = useState(0)
  const [answer, setAnswer] = useState(0)

  const ColourBox = ({ value }: { value: number }) => {
    const colourCode = COLOUR_CODES[value]
    return <ColourBoxStyled color={colourCode} />
  }

  const run = () => {
    const c1 = getRandomInt(1, 9)
    const c2 = getRandomInt(0, 9)
    const m = getRandomInt(0, 9)

    const answer = (c1 * 10 + c2) * 10 ** m

    setC1(c1)
    setC2(c2)
    setM(m)
    setAnswer(answer)
  }

  return (
    <div>
      <h1>Resistor Code Quiz</h1>
      <hr />
      <ColourCodeGrid>
        <ColourBox value={c1} />
        <ColourBox value={c2} />
        <ColourBox value={m} />
      </ColourCodeGrid>
      <input />
      <button onClick={() => run()}>Run</button>
      <div>Answer: {answer.toLocaleString()}</div>
    </div>
  )
}

export default App


import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { COLOUR_CODES } from './scripts/ENUMS'
import getRandomInt from './scripts/getRandomInt'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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

  const [prevAnswer, setPrevAnswer] = useState(0)
  const [curAnswer, setCurAnswer] = useState(0)

  const [input, setInput] = useState('')
  const [correct, setCorrect] = useState(false)

  const [correctCount, setCorrectCount] = useState(0)
  const [roundCount, setRoundCount] = useState(0)

  useEffect(() => {
    newRound()
  }, [])

  const ColourBox = ({ value }: { value: number }) => {
    const colourCode = COLOUR_CODES[value]
    return <ColourBoxStyled color={colourCode} />
  }

  const newRound = () => {
    const c1 = getRandomInt(1, 9)
    const c2 = getRandomInt(0, 9)
    const m = getRandomInt(0, 9)

    const answer = (c1 * 10 + c2) * 10 ** m

    setC1(c1)
    setC2(c2)
    setM(m)
    setCurAnswer(answer)
    setPrevAnswer(curAnswer)
    setRoundCount(roundCount + 1)
    setInput('')
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const valueNum = Number(input)
    const isCorrect = valueNum === curAnswer
    setCorrect(isCorrect)
    isCorrect && setCorrectCount(correctCount + 1)
    newRound()
  }

  const reset = () => {
    newRound()
    setRoundCount(1)
    setCorrectCount(0)
  }

  return (
    <AppDiv>
      <h1>Resistor Code Quiz</h1>
      <div>Round {roundCount}</div>
      <div>
        Score: {correctCount}/{roundCount - 1}
      </div>
      <hr />
      <ColourCodeGrid>
        <ColourBox value={c1} />
        <ColourBox value={c2} />
        <ColourBox value={m} />
      </ColourCodeGrid>
      <form>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={(e) => onSubmit(e)}>Enter</button>
      </form>
      {roundCount > 1 && (
        <>
          <div>{correct ? 'Correct' : 'Wrong'}!</div>
          <div>Answer: {prevAnswer.toLocaleString()}</div>
        </>
      )}
      <br />
      <button onClick={() => reset()}>Reset</button>
      <hr />
      <span>© 2022 Marcus Ong</span>
      <a href="https://github.com/marcus-ong-qy/resistor-code-quiz-app" target="_blank">
        source code
      </a>
    </AppDiv>
  )
}

export default App


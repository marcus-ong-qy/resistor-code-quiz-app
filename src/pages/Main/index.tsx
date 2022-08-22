import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/PATHS'

const Main = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Resistor Code Quiz</h1>
      <button onClick={() => navigate(PATHS.PLAY)}>Play</button>
      <br />
      <button onClick={() => navigate(PATHS.INSTRUCTIONS)}>How To Play</button>
    </>
  )
}

export default Main

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PATHS } from '../../routes/PATHS'

const ParagraphStyled = styled.p`
  width: 70vw;
  text-align: center;
`

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>About</h1>
      <h2>Resistor Code Quiz</h2>
      <ParagraphStyled>
        Resistor Code Quiz is a game designed to train the player to read colour codes on a
        resistor. Resistors are colour-coded to indicate the resistance value, as well as the
        precision of the resistance value given.
      </ParagraphStyled>
      <ParagraphStyled>© 2022 Marcus Ong</ParagraphStyled>
      <button onClick={() => navigate(PATHS.MAIN)}>Back</button>
    </>
  )
}

export default About

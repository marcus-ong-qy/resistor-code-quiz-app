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
      <h1>How To Play</h1>
      <ParagraphStyled>TODO</ParagraphStyled>
      <button onClick={() => navigate(PATHS.MAIN)}>Back</button>
    </>
  )
}

export default About

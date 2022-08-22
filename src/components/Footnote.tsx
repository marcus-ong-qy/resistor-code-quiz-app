import styled from 'styled-components'
import { PATHS } from '../routes/PATHS'

const StyledFootnote = styled.div`
  margin: 0 20px;
`

const Footnote = () => {
  return (
    <StyledFootnote>
      <br />
      <hr />
      <span>© 2022 Marcus Ong</span>&nbsp;
      <a href={PATHS.ABOUT}>about</a>&nbsp;
      <a
        href="https://github.com/marcus-ong-qy/resistor-code-quiz-app"
        target="_blank"
        rel="noreferrer">
        source code
      </a>
    </StyledFootnote>
  )
}

export default Footnote

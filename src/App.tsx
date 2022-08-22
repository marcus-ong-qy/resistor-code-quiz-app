import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Footnote from './components/Footnote'
import { Routes } from './routes/routes'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppDiv>
          <Routes />
        </AppDiv>
      </Suspense>
      <Footnote />
    </BrowserRouter>
  )
}

export default App


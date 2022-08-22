import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { PATHS } from './PATHS'

const Main = React.lazy(() => import(/* webpackChunckName: "Main" */ '../pages/Main'))
const Play = React.lazy(() => import(/* webpackChunckName: "Play" */ '../pages/Play'))
const About = React.lazy(() => import(/* webpackChunckName: "About" */ '../pages/About'))
const Instructions = React.lazy(
  () => import(/* webpackChunckName: "Instructions" */ '../pages/Instructions')
)

export function Routes() {
  return (
    <Switch>
      <Route path={PATHS.MAIN} element={<Main />} />
      <Route path={PATHS.PLAY} element={<Play />} />
      <Route path={PATHS.ABOUT} element={<About />} />
      <Route path={PATHS.INSTRUCTIONS} element={<Instructions />} />
    </Switch>
  )
}

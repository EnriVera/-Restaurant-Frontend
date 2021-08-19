import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Pages/home'
import SignIn from './Pages/SignIn/signin'
import SignUp from './Pages/SignUp/signup.pages'

function App() {
  const [people, setPeople] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>

        <Route path='/' render={() => {
          return people === 0 ? <Redirect to='/signin'/> : <Home />
        }}/>
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

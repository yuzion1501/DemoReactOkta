import { useState } from 'react'
import LoginButton from './Component/LoginBTN'
import LogoutButton from './Component/LogoutBTN'
import Profile from './Component/Profile'




function App() {

  return (
    <>
    <LoginButton/>
    <LogoutButton/>
    <br/>
    <Profile/>
    </>
  )
}

export default App

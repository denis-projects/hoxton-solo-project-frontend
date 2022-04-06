import { useState } from 'react'
//@ts-ignore
import Home from "./pages/home/Home.jsx"
//@ts-ignore
import Chat from "../src/pages/chat/Chat.jsx"
// @ts-ignore
import Profile from "../src/pages/profile/Profile.jsx"
// @ts-ignore
import Login from "../src/pages/login/Login.jsx"

import "../src/App.css"
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  )
}
export default App

import { useState } from 'react'
//@ts-ignore
import Home from "./pages/home/Home.jsx"
//@ts-ignore
import Chat from "../src/pages/chat/Chat.jsx"
import "../src/App.css"
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

    </div>
  )
}
export default App

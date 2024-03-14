// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Body } from './Components/Body(Homepage)/Body'
import Card from './Components/Cards(Homepage)/Cards'
import { Header } from './Components/Header(Homepage)/Header'
import { data } from './assets/Data/data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
})  

  return (
    <div>
    <Header/>
    <Body/>
    <section className='newSec'>{cards}</section>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App

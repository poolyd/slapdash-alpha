import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    SlapButton
} from "./lib-slapdash/ui/SlapButton.tsx";

function App() {
    const handleButton = (identity: string): void  => {
        let alertMessage: string = 'Some button was pressed, but not Slap Me!'
      if (identity === 'slap-me') alertMessage = 'Slap Me!';
      alert(alertMessage);
    };

  return (
    <>
      <div>
          <SlapButton title={'Slap Me!'} identity={'slap-me'} handlerCallback={handleButton}/>
          <SlapButton title={'Boring Button'} identity={'boring-button'} handlerCallback={handleButton}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

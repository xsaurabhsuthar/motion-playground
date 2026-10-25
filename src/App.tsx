import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 text-center text-[#213547] dark:bg-[#242424] dark:text-white/90">
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-24 p-6 transition hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 transition motion-safe:animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl leading-tight font-medium">Vite + React</h1>
      <div className="p-8">
        <button
          className="cursor-pointer rounded-lg border border-transparent bg-[#f9f9f9] px-5 py-2.5 text-base font-medium transition hover:border-[#646cff] focus-visible:outline-4 dark:bg-[#1a1a1a]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App

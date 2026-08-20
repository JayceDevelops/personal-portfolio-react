import Nav from "./components/Nav"
import Socials from "./components/Socials"

function App() {

  return (
    <div className="flex flex-col bg-background min-h-dvh">
      <Nav/>
      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="relative inline-block">
          <h1 className="static mb-2 font-body text-lg text-surface-alt sm:absolute sm:bottom-full sm:left-10 sm:mb-3 sm:text-2xl">I am</h1>
          <h1 className="font-display text-5xl font-bold text-white break-words sm:text-6xl md:text-8xl">Jayce Develops</h1>
          <h1 className="static mt-2 font-body text-sm text-surface-alt sm:absolute sm:top-full sm:right-0 sm:mt-3 sm:text-xl">aspiring software engineer . . .</h1>
        </div>
      </div>
      <Socials/>
    </div>
  )
}

export default App

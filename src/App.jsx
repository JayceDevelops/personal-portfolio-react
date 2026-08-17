import Nav from "./components/Nav"
import Socials from "./components/Socials"

function App() {

  return (
    <div className="flex flex-col bg-background min-h-dvh">
      <Nav/>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative inline-block">
          <h1 className="absolute bottom-full left-10 mb-3 font-body text-2xl text-surface-alt">I am</h1>
          <h1 className="font-display text-8xl font-bold text-white">Jayce Develops</h1>
          <h1 className="absolute top-full right-0 mt-3 font-body text-xl text-surface-alt">aspiring software engineer . . .</h1>
        </div>
      </div>
      <Socials/>
    </div>
  )
}

export default App

import FileExplorer from "./components/fileExplorer/fileExplorer.tsx"
import { Files } from "./data/files.js"

// Style
import "./styles/globals.scss"

function App() {
  const handleRightClick = (name, action) => {
    console.log(`Action: ${action}, File Name: ${name}`)
  }

  return (
    <main className="">
      <FileExplorer data={Files} onRightClick={handleRightClick} />
    </main>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router"
import Index from "./routes/index"
import InteractiveIndex from "./routes/interactive-index"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/interactive-index" element={<InteractiveIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

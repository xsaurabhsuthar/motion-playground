import { MotionConfig } from "motion/react"
import { BrowserRouter, Route, Routes } from "react-router"
import Index from "./routes/index"
import InteractiveIndex from "./routes/interactive-index"
import SvgAnimations from "./routes/svg-animations"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interactive-index" element={<InteractiveIndex />} />
          <Route path="/svg-animations" element={<SvgAnimations />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

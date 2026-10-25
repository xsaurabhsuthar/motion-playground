import { Link } from "react-router"

export default function Index() {
  return (
    <main className="min-h-screen bg-white text-center text-black">
      <h1>Index</h1>
      <Link className="block underline" to="/interactive-index">
        interactive-index
      </Link>
    </main>
  )
}

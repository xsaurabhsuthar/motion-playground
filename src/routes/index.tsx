import { Link } from "react-router";

export default function Index() {
  return (
    <main className="flex min-h-screen items-start overflow-y-auto bg-white px-6 text-black">
      <section className="max-w-screen-sm">
        <h1 className="text-xl font-medium">Index</h1>
        <Link className="block text-gray-500 hover:text-gray-900" to="/interactive-index">
          Interactive Index
        </Link>
      </section>
    </main>
  );
}

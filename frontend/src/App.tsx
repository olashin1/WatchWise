import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-gray-900">Tailwind works</h1>
        <p className="mt-4 text-gray-600">
          Now frontend styling is less annoying.
        </p>
        <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          Click me
        </button>
      </div>
    </main>
  );
}

export default App;

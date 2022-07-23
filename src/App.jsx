import "./App.css";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";

function App() {
  return (
    <div className="app">
      {
        //Home
      }
      <HomePage />

      {
        //Search (the results)
      }
      <Search />
    </div>
  );
}

export default App;

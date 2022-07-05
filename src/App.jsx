import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import Boxes from "./components/4 boxes";
function App() {
  return (
    <div className="nav-header">
      <Nav />
      <Header />
      <Boxes />
    </div>
  );
}

export default App;

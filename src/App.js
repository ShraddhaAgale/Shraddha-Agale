import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="background-section">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

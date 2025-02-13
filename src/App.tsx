import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

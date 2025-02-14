import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
        
      
        <img src="https://spaceplace.nasa.gov/meteor-shower/en/meteor-shower.en.gif" alt="" style={{"top": "0", "left": "0","width": "100%", position: "fixed", overflow: "hidden", height: "100vh"}} />
        
        <div style={{ position: "relative", zIndex: 1, color: "#fff" }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;

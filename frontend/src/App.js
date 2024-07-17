import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> is similar to switch in react-router, but it does not support exact path matching */}
        <Routes>
          <Route path="/post" element={<Blogpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

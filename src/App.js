import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Episodes from "./pages/Episodes";
import Seassons from "./pages/Seassons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/seassons" element={<Seassons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

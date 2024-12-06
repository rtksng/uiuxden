import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schumacher from "./pages/Schumacher";

const App = () => {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schumacher" element={<Schumacher />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

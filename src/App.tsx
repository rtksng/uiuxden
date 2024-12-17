import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schumacher from "./pages/Schumacher";

import Knowledger from "./pages/CaseStudiesPage/Knowledger";
import UXStrategy from "./pages/Features/UXStrategy";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledger-case-study" element={<Knowledger />} />
          <Route path="/schumacher" element={<Schumacher />} />
          <Route path="/ux-strategy" element={<UXStrategy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

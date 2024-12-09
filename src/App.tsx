import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schumacher from "./pages/Schumacher";

import Knowledger from "./pages/CaseStudiesPage/Knowledger";
const App = () => {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledger-case-study" element={<Knowledger />} />
          <Route path="/schumacher" element={<Schumacher />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

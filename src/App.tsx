import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

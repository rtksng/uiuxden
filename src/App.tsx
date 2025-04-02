import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schumacher from "./pages/Schumacher";
import Voltjourney from "./pages/Voltjourney";
import Elementy from "./pages/CaseStudiesPage/Elyments";
import Knowledger from "./pages/CaseStudiesPage/Knowledger";
import UXStrategy from "./pages/Features/UXStrategy";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import DesignSprint from "./pages/DesignSprint";
import ContactUS from "./pages/ContactUs";
import UXConsultancy from "./pages/UXConsultancy";
import UIBranding from "./pages/UIBranding";
import UXAudit from "./pages/UXAudit";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import UIDesign from "./pages/UIDesign";
import Accessibility from "./pages/Accessibility";
const App = () => {
  return (
    <Router basename="/uiuxdenred">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledger-case-study" element={<Knowledger />} />
          <Route path="/elyments-case-study" element={<Elementy />} />
          <Route path="/schumacher" element={<Schumacher />} />
          <Route path="/voltjourney" element={<Voltjourney />} />
          <Route path="/ux-strategy" element={<UXStrategy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/design-sprint" element={<DesignSprint />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/ux-consultancy" element={<UXConsultancy />} />
          <Route path="/ui-branding" element={<UIBranding />} />
          <Route path="/ux-audit" element={<UXAudit />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/ui-design" element={<UIDesign />} />
          <Route path="/accessiblity" element={<Accessibility />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Technology,
  Clients,
  Career,
  Contact,
} from "../src/components";

import {
  AccountingOutsourcing,
  AiData,
  CustomerSupport,
  DataSolution,
  OrderManagement,
  TranScription,
} from "../src/bpo_pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accounting_outsourcing" element={<AccountingOutsourcing />} />
        <Route path="/ai-data-preparation" element={<AiData />} />
        <Route path="/customer-onboarding-support" element={<CustomerSupport />} />
        <Route path="/data-solution" element={<DataSolution />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/transcription" element={<TranScription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

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

import {
  ApplicationDevelopment,
  QualityTesting,
  Team,
  Devops,
  Zendesk,
  Salesforce,
  NetSuite,
  DataVisual,
} from "./technology_pages";


import {
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
  Blog7,
  Blog8,
  Blog9,
  Blog10,
  Blog11,
  Blog12,
  Blog13,
  Blog14,
  Blog15,
  Blog16,
  Blog17,
  Blog18,
  Blog19,
  Blog20,
  Blog21,
  Blog22,
  Blog23,
  Blog24,
  Blog25,
  Blog26,
  Blog27,
  Blog28,
  Blog29,
  Blog30,
  Blog31,
  Blog32,
  Blog33,
  Blog34,
  Blog35,
  Blog36,
  Blog37,
  Blog38,
  Blog39,
  Blog40,
  Blog41,
  Blog42,
  Blog43,
} from "./blog_pages";


import {
  Podcast1,
  Podcast2,
  Podcast3,
  Podcast4,
  Podcast5,
  Podcast6,
  Podcast7,
  Podcast8,
  Podcast9,
  Podcast10,
  Podcast11,
  Podcast12,
  Podcast13,
  Podcast14,
  Podcast15,
  Podcast16,
  Podcast17,
  Podcast18,
} from "./Podcast_pages";

import BlogView from "./Blog_view";
import Podcast from "./Podcast";

import {
  Data1,
  Data2,
  Data3,
  Data4,
  Data5,
  Data6,
  Data7,
  Data8,

} from "./Data_solution_pages";

import AboutImage from "./About_pages/AboutImage";
import AboutVideo from "./About_pages/AboutVideo";


import {
  View1,
  View2,
  View3,

} from "./View_page";

import Terms from "./Term_page/Terms";
import Privacy from "./Privacy_page/Privacy";

import {
  Industry1,
  Industry2,
  Industry3,
  Industry4,
  Industry5,
  Industry6,
} from "./Industry_pages";


import {
  Quality1,
  Quality2,
  Quality3,
  Quality4,
  Quality5,
  Quality6,
} from "./QA_pages";

import Nutsuite from "./technology_pages/Nutsuite";
import Apply from "./components/apply";

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
        <Route path="/application-development" element={<ApplicationDevelopment />} />
        <Route path="/quality-assurance-testing" element={<QualityTesting />} />
        <Route path="/team-augmentation" element={<Team />} />
        <Route path="/devops" element={<Devops/>} />
        <Route path="/zendesk" element={<Zendesk/>} />
        <Route path="/salesforce" element={<Salesforce/>} />
        <Route path="/nutsuite" element={<Nutsuite/>} />
        <Route path="/datavisual" element={<DataVisual/>} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="/blog7" element={<Blog7 />} />
        <Route path="/blog8" element={<Blog8 />} />
        <Route path="/blog9" element={<Blog9 />} />
        <Route path="/blog10" element={<Blog10 />} />
        <Route path="/blog11" element={<Blog11 />} />
        <Route path="/blog12" element={<Blog12 />} />
        <Route path="/blog13" element={<Blog13 />} />
        <Route path="/blog14" element={<Blog14 />} />
        <Route path="/blog15" element={<Blog15 />} />
        <Route path="/blog16" element={<Blog16 />} />
        <Route path="/blog17" element={<Blog17 />} />
        <Route path="/blog18" element={<Blog18 />} />
        <Route path="/blog19" element={<Blog19 />} />
        <Route path="/blog20" element={<Blog20 />} />
        <Route path="/blog21" element={<Blog21 />} />
        <Route path="/blog22" element={<Blog22 />} />
        <Route path="/blog23" element={<Blog23 />} />
        <Route path="/blog24" element={<Blog24 />} />
        <Route path="/blog25" element={<Blog25 />} />
        <Route path="/blog26" element={<Blog26 />} />
        <Route path="/blog27" element={<Blog27 />} />
        <Route path="/blog28" element={<Blog28 />} />
        <Route path="/blog29" element={<Blog29 />} />
        <Route path="/blog30" element={<Blog30 />} />
        <Route path="/blog31" element={<Blog31 />} />
        <Route path="/blog32" element={<Blog32 />} />
        <Route path="/blog33" element={<Blog33 />} />
        <Route path="/blog34" element={<Blog34 />} />
        <Route path="/blog35" element={<Blog35 />} />
        <Route path="/blog36" element={<Blog36 />} />
        <Route path="/blog37" element={<Blog37 />} />
        <Route path="/blog38" element={<Blog38 />} />
        <Route path="/blog39" element={<Blog39 />} />
        <Route path="/blog40" element={<Blog40 />} />
        <Route path="/blog41" element={<Blog41 />} />
        <Route path="/blog42" element={<Blog42 />} />
        <Route path="/blog43" element={<Blog43 />} />
        <Route path="/blogView" element={<BlogView />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/podcast1" element={<Podcast1 />} />
        <Route path="/podcast2" element={<Podcast2 />} />
        <Route path="/podcast3" element={<Podcast3 />} />
        <Route path="/podcast4" element={<Podcast4 />} />
        <Route path="/podcast5" element={<Podcast5 />} />
        <Route path="/podcast6" element={<Podcast6 />} />
        <Route path="/podcast7" element={<Podcast7 />} />
        <Route path="/podcast8" element={<Podcast8 />} />
        <Route path="/podcast9" element={<Podcast9 />} />
        <Route path="/podcast10" element={<Podcast10 />} />
        <Route path="/podcast11" element={<Podcast11 />} />
        <Route path="/podcast12" element={<Podcast12 />} />
        <Route path="/podcast13" element={<Podcast13 />} />
        <Route path="/podcast14" element={<Podcast14 />} />
        <Route path="/podcast15" element={<Podcast15 />} />
        <Route path="/podcast16" element={<Podcast16 />} />
        <Route path="/podcast17" element={<Podcast17 />} />
        <Route path="/podcast18" element={<Podcast18 />} />
        <Route path="/Data1" element={<Data1 />} />
        <Route path="/Data2" element={<Data2 />} />
        <Route path="/Data3" element={<Data3 />} />
        <Route path="/Data4" element={<Data4 />} />
        <Route path="/Data5" element={<Data5 />} />
        <Route path="/Data6" element={<Data6 />} />
        <Route path="/Data7" element={<Data7 />} />
        <Route path="/Data8" element={<Data8 />} />
        <Route path="/aboutImage" element={<AboutImage />} />
        <Route path="/aboutVideo" element={<AboutVideo />} />
        <Route path="/view1" element={<View1 />} />
        <Route path="/view2" element={<View2 />} />
        <Route path="/view3" element={<View3 />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Industry1" element={<Industry1 />} />
        <Route path="/Industry2" element={<Industry2 />} />
        <Route path="/Industry3" element={<Industry3 />} />
        <Route path="/Industry4" element={<Industry4 />} />
        <Route path="/Industry5" element={<Industry5 />} />
        <Route path="/Industry6" element={<Industry6 />} />
        <Route path="/quality1" element={<Quality1 />} />
        <Route path="/quality2" element={<Quality2 />} />
        <Route path="/quality3" element={<Quality3 />} />
        <Route path="/quality4" element={<Quality4 />} />
        <Route path="/quality5" element={<Quality5 />} />
        <Route path="/quality6" element={<Quality6 />} />
        <Route path="/apply" element={<Apply />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

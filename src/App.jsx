import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Spotlight from "./components/Spotlight";
import BackgroundEffects from "./components/BackgroundEffects";
import SmoothScroll from "./components/SmoothScroll"; 
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ReadingProgress from "./components/common/ReadingProgress";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Foundations from "./pages/Foundations";
import Typography from "./pages/Typography";
import Color from "./pages/Color";
import Motion from "./pages/Motion";
import Layout from "./pages/Layout";
import Clarity from "./pages/Clarity";
import Consistency from "./pages/Consistency";
import Accessibility from "./pages/Accessibility";
import Performance from "./pages/Performance";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll />  

      <Loader />
       <Cursor /> 
       <Spotlight /> 
       <BackgroundEffects /> 
      <ReadingProgress />

      {/* Shared Layout */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundations" element={<Foundations />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/color" element={<Color />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/clarity" element={<Clarity />} />
        <Route path="/consistency" element={<Consistency />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
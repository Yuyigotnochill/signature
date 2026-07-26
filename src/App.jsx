import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Spotlight from "./components/Spotlight";
import BackgroundEffects from "./components/BackgroundEffects";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Foundations from "./pages/Foundations";
import Typography from "./pages/Typography";
import Color from "./pages/Color";
import Motion from "./pages/Motion";
import ReadingProgress from "./components/common/ReadingProgress";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Cursor />
      <Spotlight />
      <BackgroundEffects />
      <ReadingProgress />


      {/* Shared Layout */}
      <Navbar />

      <Routes>
      <Route path="/layout" element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/foundations" element={<Foundations />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/color" element={<Color />} />
        <Route path="/motion" element={<Motion />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

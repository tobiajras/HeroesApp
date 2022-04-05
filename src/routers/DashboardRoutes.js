import { Navbar } from "../components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen.js";
import { DcScreen } from "../components/dc/DcScreen.js";
import { SearchScreen } from "../components/search/SearchScreen.js";
import { HeroScreen } from "../components/hero/HeroScreen.js";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

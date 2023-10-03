import { Route, Routes } from "react-router-dom";
import Birthday from "./starter/1-birthday";
import GroceryBud from "./starter/10-groceryBud";
import NavigationBar from "./starter/11-navBar";
import SideBarData from "./starter/12-sidebarStarter";
import StarterTours from "./starter/2-tours";
import Reviews from "./starter/3-reviews";
import Accordion from "./starter/4-accordion";
import MenuPage from "./starter/5-menu";
import TabStarter from "./starter/6-tab";
import SliderCarousel from "./starter/7-slider";
import SlickCarousel from "./starter/7-slider/slickCarousel";
import LoremIpsum from "./starter/8-loremIpsum";
import ColorGenerator from "./starter/9-colorGenerator";
import React from "react";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Birthday />} />
      <Route path="/tours" element={<StarterTours />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/grocery-bud" element={<GroceryBud />} />
      <Route path="/navbar" element={<NavigationBar />} />
      <Route path="/sidebar" element={<SideBarData />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/tabs" element={<TabStarter />} />
      <Route path="/colors" element={<ColorGenerator />} />
      <Route path="/lorem" element={<LoremIpsum />} />
      <Route path="/slider" element={<SliderCarousel />} />
      <Route path="/slick-slider" element={<SlickCarousel />} />

      <Route path="*" element="not found!" />
    </Routes>
  );
};

export default AppRoute;

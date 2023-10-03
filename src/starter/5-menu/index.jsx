import React, { useState } from "react";
import Title from "./title";
import menu from "./data";
import Menu from "./menu";
import Categories from "./categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
const MenuPage = () => {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our-menu" />
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};

export default MenuPage;

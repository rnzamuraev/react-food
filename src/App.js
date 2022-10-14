import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";
// import { Switch };
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

import { Home } from "./pages/HomePage";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route
              exact
              path="/react-food-project"
              element={<Home />}
            ></Route>
            <Route
              path="/category/:name"
              element={<Category />}
            ></Route>
            <Route
              path="/meal/:name"
              element={<Recipe />}
            ></Route>
            <Route path="/about" element={<About />} />
            <Route
              path="/contacts"
              element={<Contacts />}
            />
            <Route element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

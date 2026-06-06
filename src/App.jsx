import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { SandwichesList } from "./pages/SandwichesList";
import { BreadsList } from "./pages/BreadsList";
import { Footer } from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sandwiches" element={<SandwichesList />}></Route>
          <Route path="/sandwiches/details/:sandwichId" element={undefined}></Route>
          <Route path="/sandwiches/add" element={undefined}></Route>
          <Route path="/sandwiches/edit/:sandwichId" element={undefined}></Route>

          <Route path="/breads" element={<BreadsList />}></Route>
          <Route path="/breads/details/:breadId" element={undefined}></Route>

          <Route path="/About" element={undefined}></Route>

          <Route path="/error" element={undefined}></Route>
          <Route path="*" element={undefined}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

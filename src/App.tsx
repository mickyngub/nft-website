import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "PageContent/Header/Header";
import Content1 from "PageContent/Content1/Content1";
import Content2 from "PageContent/Content2/Content2";

function App() {
  return (
    <div className="font-press-start">
      Stray Cat NFT Collection
      <Header />
      <Content1 />
      <Content2 />
    </div>
  );
}

export default App;

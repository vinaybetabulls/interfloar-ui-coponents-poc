import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './components';


import { MenuItems } from "./components/common/Header.menuItems";
import { FooterData } from "./components/common/Footer.common";

function App() {
  console.log({...MenuItems});
  return (
    <div className="">
      <Header {...MenuItems}/>
      <Footer footer={FooterData.data}/>
    </div>
  );
}

export default App;

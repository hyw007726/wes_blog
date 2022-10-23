import './App.css';
import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from "react-router-dom";

function App(props) {
  const [collapsed,setCollapsed]=React.useState(false)

  return (  <div>
  <Header />
  <Sidebar clp={{collapsed,setCollapsed}} articleList={props.articleList} />
  <Outlet context={{collapsed, setCollapsed}} />
  {/* <Footer /> */}
  </div>)

}

export default App;

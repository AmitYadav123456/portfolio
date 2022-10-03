import React from 'react'
import About from './components/about/About'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import ProductList from './components/productList/ProductList'
import Toggle from './components/Toggle/Toggle'
import { useContext } from 'react';
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background :darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}>
      <Toggle/>
     <Intro/>
     <About/>
     <ProductList/>
     <Contact/>
    </div>
  )
}

export default App






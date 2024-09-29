import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import ProductCatalog from './ProductCatalog';
import ProductPage from './ProductPage';


export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="GARRITAS PET SHOP" />
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/products" component={ProductCatalog} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

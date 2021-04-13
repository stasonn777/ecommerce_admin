import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/layout/Header";
import Products from "./components/products";
import Sidebar from "./components/sidebar";
import SingleProduct from "./components/singleProduct";
import { Container, GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <div className="main">
          <Sidebar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/new-product" component={SingleProduct} />
            <Route exact path="/products/:id" component={SingleProduct} />
          </Container>
        </div>
      </Router>
    </>
  )
}

export default App

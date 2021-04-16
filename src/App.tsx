import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home";
import Alert from "./components/layout/Alert";
import Header from "./components/layout/Header";
import Products from "./components/products";
import Sidebar from "./components/sidebar";
import SingleProduct from "./components/singleProduct";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Container, GlobalStyle } from "./styles";
import PrivateRoute from "./utils/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  const { loadUser } = useActions()
  const { isAuthenticated, loading } = useTypedSelector(state => state.userAuth)

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [isAuthenticated])

  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <div className="main">
          {isAuthenticated && !loading ? (
            <Sidebar />
          ) : (null)}
          <Container>
            <Alert />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/products" component={Products} />
            <PrivateRoute exact path="/new-product" component={SingleProduct} />
            <PrivateRoute exact path="/products/:id" component={SingleProduct} />
          </Container>
        </div>
      </Router>
    </>
  )
}

export default App

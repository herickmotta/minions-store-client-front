import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./assets/global/GlobalStyle";
import ResetCSS from "./assets/global/ResetCSS";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import Checkout from "./pages/Checkout";
import ConfirmSignUp from "./pages/ConfirmSignUp";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => (
  <UserProvider>
    <CartProvider>
      <Router>
        <ResetCSS />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/profile" component={Profile} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/confirm-sign-up" component={ConfirmSignUp} />
        </Switch>
      </Router>
    </CartProvider>
  </UserProvider>
);

export default App;

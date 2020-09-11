import React from "react";
import Home from "./components/home/home";
// import modelComponent from "./components/productpart/products/cardsModel/cardsModel";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from "./components/header/useContext";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { persistor } from "./redux/store/store";
import CPForm from "./components/adminPanel/ProductForm/form";
import CreatedProdComp from "./components/adminPanel/createdProduct/createdProduct";
import UserDetailsForm from './components/userDetails/userDetailsForm'
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user/detailsForms" component={UserDetailsForm}/>
              <Route path="/admin/form" component={CPForm} />
              <Route path="/admin/product" component={CreatedProdComp} />
            </Switch>
          </PersistGate>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
};

export default App;

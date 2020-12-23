import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout';
import Checkout from '../container/Checkout';
import Home from '../container/Home';
import Information from '../container/Information';
import NotFound from '../container/NotFound';
import Payment from '../container/Payment';
import Success from '../container/Success';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/information" component={Information} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route exact path="/checkout/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;

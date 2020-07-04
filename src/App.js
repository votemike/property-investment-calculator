import React, { Suspense, lazy, useState} from 'react';
import {
  HashRouter as Router, //@TODO switch to BrowserRouter when not using gh-pages
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.scss';
const Home = lazy(() => import('./pages/Home'));
const InvestorPack = lazy(() => import('./pages/InvestorPack'));

function App() {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <div>
        <nav className="navbar is-light is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={process.env.PUBLIC_URL + '/images/logos/96x96.png'} width="28" height="28" alt="App Icon"/>
            </Link>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item has-text-weight-semibold">Property Investment Calculator</Link>
            </div>
          </div>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/investor-pack">
              {formData.name ? <InvestorPack formData={formData}/> : <Redirect to="/" />}
            </Route>
            <Route path="/">
              <Home formData={formData} setFormData={setFormData}/>
            </Route>
          </Switch>
        </Suspense>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>Created by <a href="https://votemike.co.uk">Michael Gwynne</a></p>
            <p>You may also like <a href="https://votemike.github.io/amortisation-calculator/">Amortisation
              Calculator</a> and <a href="https://votemike.github.io/stress-test/">Property Stress Test</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

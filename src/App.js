import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      <section className="deal-generator section">
        <div className="container">
          <header>
            <h1 className="title is-1">Deal Generator</h1>
          </header>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Created by <a href="https://votemike.co.uk">Michael Gwynne</a></p>
          <p>You may also like <a href="https://votemike.github.io/amortisation-calculator/">Amortisation Calculator</a> and <a href="https://votemike.github.io/stress-test/">Property Stress Test</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;

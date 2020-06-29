import React, {useState} from 'react';
import './App.scss';
import Results from "./components/results";
import Form from "./components/form";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <>
      <section className="deal-generator section">
        <div className="container">
          <header>
            <h1 className="title is-1">Deal Generator</h1>
          </header>
          <Form formHandler={setFormData}/>
          <Results formData={formData}/>
          <div className="has-text-centered is-size-7">Assumptions: The property is in England and follows normal stamp duty costs with the added 3% for second homes. The property is a single property and will remain a single property. The purchase will be funded by a bridging loan and will be remortgaged once refurbishment is complete. The mortgage will be interest only. No other loans will exist apart from the mortgage.</div>
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

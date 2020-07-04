import React, {lazy, Suspense} from "react";
import Form from "../components/form";
const Results = lazy(() => import('../components/results'));

const Home = ({formData, setFormData}) => {
  return (
    <>
      <section className="section pt-5">
        <div className="container">
          <header>
            <h1 className="title is-1">Property Investment Calculator</h1>
          </header>
          <p className="mb-4">Enter below all the expenses and the estimated end-value and rent for the property deal you are looking in to. Find the amount of money left in the deal, the monthly cashflow and the yearly ROI. If you would like, you can generate an investment document to give out to potential investors.</p>
          <Form formHandler={setFormData}/>
          { formData.name && <Suspense fallback={<div>Loading...</div>}><Results formData={formData}/></Suspense> }
          <div className="has-text-centered is-size-7">Assumptions: The property is in England and follows normal stamp
            duty costs with the added 3% for second homes. The property is a single property and will remain a single
            property. The purchase will be funded by a bridging loan and will be remortgaged once refurbishment is
            complete. The mortgage will be interest only. No other loans will exist apart from the mortgage.
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

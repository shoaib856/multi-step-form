import { useState } from "react";
import "./App.css";
import StepList from "./components/step-list";
import Header from "./components/header";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";
import StepFour from "./components/step-four";
import ThankYou from "./components/thank-you";

function App() {
  let [index, setIndex] = useState(3);
  const handleNextStep = () => {
    setIndex(++index);
  };
  const handleBackStep = () => {
    setIndex(--index);
  };
  const changePlan = () => {
    setIndex(1);
  };
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <aside>
            <StepList index={index > 3 ? 3 : index} />
          </aside>
          <main>
            {index < 4 ? (
              <>
                <div className="content">
                  <Header index={index} />
                  {index === 0 ? (
                    <StepOne />
                  ) : index === 1 ? (
                    <StepTwo />
                  ) : index === 2 ? (
                    <StepThree />
                  ) : (
                    index === 3 && <StepFour changePlan={changePlan} />
                  )}
                </div>
                <div
                  className="btns"
                  style={{
                    flexDirection: index === 0 ? "row-reverse" : "row",
                  }}
                >
                  {index > 0 && (
                    <button
                      type="button"
                      className="back"
                      onClick={handleBackStep}
                    >
                      Go Back
                    </button>
                  )}
                  <button
                    type="button"
                    className="next"
                    onClick={() => {
                      handleNextStep();
                    }}
                  >
                    {index === 3 ? "Confirm" : "Next Step"}
                  </button>
                </div>
              </>
            ) : (
              <div className="content">
                <ThankYou />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

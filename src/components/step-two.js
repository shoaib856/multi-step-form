import "./step-two.css";
import { useEffect, useState } from "react";
import Plan from "./plan";

const plans = [
  {
    plan: "Arcade",
    priceMonthly: "9",
    priceYearly: "90",
  },
  {
    plan: "Advanced",
    priceMonthly: "12",
    priceYearly: "120",
  },
  {
    plan: "Pro",
    priceMonthly: "15",
    priceYearly: "150",
  },
];

function StepTwo() {
  const [planType, setPlanType] = useState(
    JSON.parse(sessionStorage.getItem("paymentType")) ?? true
  );
  const [selectedPlan, setSelectedPlan] = useState(
    JSON.parse(sessionStorage.getItem("plan")) ?? {
      planName: "Arcade",
      priceMonthly: plans[0].priceMonthly,
      priceYearly: plans[0].priceYearly,
      priceActivated: planType ? plans[0].priceMonthly : plans[0].priceYearly,
    }
  );
  const handleTypeChange = () => {
    setPlanType(!planType);
    setSelectedPlan({
      ...selectedPlan,
      priceActivated: !planType
        ? selectedPlan.priceMonthly
        : selectedPlan.priceYearly,
    });
  };

  const updateSelectedPlan = (plan, priceMonthly, priceYearly) => {
    setSelectedPlan({
      ...selectedPlan,
      planName: plan,
      priceMonthly: priceMonthly,
      priceYearly: priceYearly,
      priceActivated: planType ? priceMonthly : priceYearly,
    });
  };

  useEffect(() => {
    sessionStorage.setItem("paymentType", planType);
    sessionStorage.setItem("plan", JSON.stringify(selectedPlan));
  }, [planType, selectedPlan]);

  return (
    <>
      <div className="d-flex justify-content-between">
        {plans.map((plan) => {
          return (
            <Plan
              key={plan.plan}
              plan={plan.plan}
              priceMonthly={plan.priceMonthly}
              priceYearly={plan.priceYearly}
              planSelecting={updateSelectedPlan}
              type={planType}
            />
          );
        })}
      </div>

      <div className="plan-type d-flex justify-content-center align-items-center">
        <p className={"type monthly " + (planType ? "active" : "")}>Monthly</p>
        <span className="type-choice">
          <label className="ball">
            <input
              type="checkbox"
              onChange={() => {
                handleTypeChange();
              }}
              defaultChecked={!planType}
            />
          </label>
        </span>
        <p className={"type yearly " + (planType ? "" : "active")}>Yearly</p>
      </div>
    </>
  );
}

export default StepTwo;

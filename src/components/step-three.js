import AddOn from "./add-on";
import "./step-three.css";
import { useImmer } from "use-immer";
import { useEffect } from "react";

const addOnsData = [
  {
    header: "Online service",
    desc: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
    checked: false,
  },
  {
    header: "Larger storage",
    desc: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
    checked: false,
  },
  {
    header: "Customizable profile",
    desc: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
    checked: false,
  },
];
function StepThree() {
  const [checked, updateChecked] = useImmer(
    JSON.parse(sessionStorage.getItem("selectedList")) ?? addOnsData
  );
  const paymentType = JSON.parse(sessionStorage.getItem("paymentType")) ?? true;

  function handleSelection(value, check) {
    updateChecked((checked) => {
      const addOn = checked.find((c) => c.header === value);
      addOn.checked = check;
    });
  }
  useEffect(() => {
    sessionStorage.setItem("selectedList", JSON.stringify(checked));
  }, [checked]);
  return (
    <div className="add-ons d-flex flex-column">
      {checked.map((addOnData) => {
        return (
          <AddOn
            key={addOnData.header}
            header={addOnData.header}
            desc={addOnData.desc}
            price={paymentType ? addOnData.priceMonthly : addOnData.priceYearly}
            onToggle={handleSelection}
            paymentType={paymentType}
            checked={addOnData.checked}
          />
        );
      })}
    </div>
  );
}

export default StepThree;

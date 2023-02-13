import Step from "./step";
import "./step-list.css";
const stepsData = [
  { num: "1", info: "your info" },
  { num: "2", info: "select plan" },
  { num: "3", info: "add-ons" },
  { num: "4", info: "summary" },
];

export default function StepList(props) {
  return (
    <div className="step-list d-flex">
      {stepsData.map((stepData, i) => {
        return (
          <Step
            key={stepData.num}
            num={stepData.num}
            info={stepData.info}
            active={i === props.index ? "active" : ""}
          />
        );
      })}
    </div>
  );
}

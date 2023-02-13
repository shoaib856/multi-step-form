import InputField from "./input-field";
import "./step-one.css"

function StepOne() {
  return (
    <>
      <InputField
        label="Name"
        type="text"
        placeholder="e.g. Stephen King"
      />
      <InputField
        label="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <InputField
        label="Phone Number"
        type="text"
        placeholder={`e.g. +1 234 567 890`}
      />
    </>
  );
}
export default StepOne;

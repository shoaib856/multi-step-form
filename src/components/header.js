import "./header.css";
const headers = [
  {
    title: "Personal info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    desc: "Double-check everything looks OK before confirming.",
  },
];
export default function Header(props) {
  return (
    <div className="heading">
      <h1 className="heading-title">{headers[props.index].title}</h1>
      <p className="heading-desc">{headers[props.index].desc}</p>
    </div>
  );
}

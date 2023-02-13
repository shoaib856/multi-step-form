
function Step(props) {
  return (
    <div className="step d-flex align-items-center">
      <div className={"step-number " + props.active??""}>{props.num}</div>
      <div className="step-details">
        <div className="step-details-number">STEP {props.num}</div>
        <div className="step-details-info">{props.info.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default Step;

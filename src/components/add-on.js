function AddOn({
  header,
  desc,
  price,
  onToggle,
  paymentType,
  checked,
}) {
  return (
    <label className="add-on d-flex align-items-center">
      <input
        type="checkbox"
        value={header}
        onChange={(e) => onToggle(e.target.value, e.target.checked)}
        defaultChecked={checked}
      />
      <div className="d-flex align-items-center">
        <div className="add-on-details">
          <h3>{header}</h3>
          <p>{desc}</p>
        </div>
        <div className="price">
          <p className={"monthly " + (paymentType ? "active" : "")}>
            +${price}/mo
          </p>
          <p className={"yearly " + (paymentType ? "" : "active")}>
            +${price}/yr
          </p>
        </div>
      </div>
    </label>
  );
}

export default AddOn;

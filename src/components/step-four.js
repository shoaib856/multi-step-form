import "./step-four.css";
function StepFour({ changePlan }) {
  const paymentType = JSON.parse(sessionStorage.getItem("paymentType"));
  const plan = JSON.parse(sessionStorage.getItem("plan"));
  const selectedAddOns = JSON.parse(sessionStorage.getItem("selectedList"));
  const total = () => {
    let totalPrice = Number(plan.priceActivated);
    selectedAddOns.forEach((selectedAddOn) => {
      totalPrice += Number(
        selectedAddOn.checked
          ? paymentType
            ? selectedAddOn.priceMonthly
            : selectedAddOn.priceYearly
          : 0
      );
    });
    return totalPrice;
  };
  return (
    <>
      <div className="summary">
        <div className="selected-plan">
          <div className="selected-plan-name">
            <p>
              {plan.planName} {paymentType ? "(Monthly)" : "(Yearly)"}
            </p>
            <button
              type="button"
              className="change-plan-btn"
              onClick={changePlan}
            >
              Change
            </button>
          </div>
          <p className="selected-plan-price">
            ${plan.priceActivated}/{paymentType ? "mo" : "yr"}
          </p>
        </div>
        <hr style={{ color: "var(--Cool-gray)" }} />
        <div className="selected-add-ons">
          {selectedAddOns.map((selectedAddOn) => {
            return selectedAddOn.checked ? (
              <div className="selected-add-on" key={selectedAddOn.header}>
                <p className="selected-add-on-name">{selectedAddOn.header}</p>
                <p className="selected-add-on-price">
                  +$
                  {paymentType
                    ? selectedAddOn.priceMonthly
                    : selectedAddOn.priceYearly}
                  /{paymentType ? "mo" : "yr"}
                </p>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="total-price">
        <p style={{ margin: "5px 0 0 0" }}>
          Total (per {paymentType ? "month" : "year"})
        </p>
        <p className="price">
          +${total()}/{paymentType ? "mo" : "yr"}
        </p>
      </div>
    </>
  );
}
export default StepFour;

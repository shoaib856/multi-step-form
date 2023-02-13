import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

function Plan({ plan, type, priceMonthly, priceYearly, planSelecting }) {
  return (
    <label htmlFor={plan.toString()} className="plan">
      <input
        type="radio"
        name="plan-group"
        id={plan.toString()}
        value={plan}
        style={{ display: "none" }}
        onChange={(e) =>
          planSelecting(e.target.value, priceMonthly, priceYearly)
        }
        defaultChecked={
          plan ===
          (JSON.parse(sessionStorage.getItem("plan")) === null
            ? "Arcade"
            : JSON.parse(sessionStorage.getItem("plan")).planName)
        }
      />
      <div className="image">
        <img
          src={
            plan === "Arcade" ? arcade : plan === "Advanced" ? advanced : pro
          }
          alt="..."
        />
      </div>
      <p className="desc">{plan}</p>
      <p className="price" style={{ display: type ? "block" : "none" }}>
        ${priceMonthly}/mo
      </p>
      <div className="price" style={{ display: type ? "none" : "block" }}>
        <p className="price-amount">${priceYearly}/yr</p>
        <p className="price-discount">2 months free</p>
      </div>
    </label>
  );
}

export default Plan;

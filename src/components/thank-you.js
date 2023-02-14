import thankYou from "../assets/images/icon-thank-you.svg";
import "./thank-you.css";
function ThankYou() {
  return (
    <>
      <div className="thank-you-image">
        <img src={thankYou} alt="..." />
      </div>
      <div className="thank-text">
        <h3>Thank you!</h3>
        <p>
          Thanks for confirming your subscription! We hope you have Fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
}

export default ThankYou;

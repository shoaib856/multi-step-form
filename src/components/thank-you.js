import thankYou from "../assets/images/icon-thank-you.svg";
function ThankYou() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          paddingTop: "127px",
          paddingBottom: "31px",
        }}
      >
        <img src={thankYou} alt="..." />
      </div>
      <div className="thank" style={{ textAlign: "center" }}>
        <h3
          style={{ fontFamily: "Bold", fontSize: "32px", marginBottom: "15px" }}
        >
          Thank you!
        </h3>
        <p style={{ fontFamily: "Regular" }}>
          Thanks for confirming your subscription! We hope you have Fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
}

export default ThankYou;

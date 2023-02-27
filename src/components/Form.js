import ReCAPTCHA from "react-google-recaptcha"

const Form = () => {
    return (
    <div className="form">
      <ReCAPTCHA
        sitekey="6LepAbskAAAAAPTqNkNnuFwaa5wAE1nTrQz9WKCh"
      />
    </div>
  );
};

export default Form;
import ReCAPTCHA from "react-google-recaptcha"

const Form = () => {
    return (
    <div className="form">
      <ReCAPTCHA
        sitekey="6LeNeNQkAAAAALtOpCkWvlATPMoSHhsON3unfw7u"
      />
    </div>
  );
};

export default Form;
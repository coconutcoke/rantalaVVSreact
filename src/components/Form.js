import ReCAPTCHA from "react-google-recaptcha"

const Form = () => {
    return (
    <div>
      <ReCAPTCHA className="form"
        sitekey="6LeNeNQkAAAAALtOpCkWvlATPMoSHhsON3unfw7u"/>
    </div>
  );
};

export default Form;
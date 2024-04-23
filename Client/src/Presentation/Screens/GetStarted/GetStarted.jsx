import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import GetStartedViewHandler from "./GetStartedViewHandler";

function Statement(text) {
  return (
    <>
      <img src="./hollowCircle.svg" style={{ height: "100%" }} alt="bullet" />
      <div>{text}</div>
    </>
  );
}

function Intro() {
  return (
    <>
      <div className="Motto">
        <img
          src="./hospitalCalendarLogo.svg"
          style={{ height: "120px" }}
          alt="appLogo"
        />
        Let us help you Streamline Medical Event Planning
      </div>
      <div className="StatementContainer">
        {Statement("Easily create/update events")}
        {Statement("Automatic Notifications")}
        {Statement("Easily create/update events")}
      </div>
    </>
  );
}

function Login(setSignupMode, form, login) {
  return (
    <>
      <div className="ActiveMode">
        <span className="active">Login</span>
        <span onClick={() => setSignupMode()}> / Signup</span>
      </div>
      <form className="GetStartedForm" ref={form} onSubmit={() => login()}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="LOGIN" key={'submitButton'}/>
      </form>
    </>
  );
}

function Signup(setLoginMode, form, signup) {
  return (
    <>
      <div className="ActiveMode">
        <span onClick={() => setLoginMode()}>Login / </span>
        <span className="active">Signup</span>
      </div>
      <form className="GetStartedForm" ref={form} onSubmit={() => signup()}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="submit" value="SIGNUP" key={'submitButton'}/>
      </form>
    </>
  );
}

function NotFound() {
  const navigate = useNavigate();
  navigate("/NotFound");
  return <></>;
}

function GetStarted() {
  const { screenMode, setLoginMode, setSignupMode, form, login, signup } =
    GetStartedViewHandler();
  return (
    <div className="GetStartedWrapper">
      <div className="GetStarted">
        <div className="Intro">{Intro()}</div>
        <div className="Options">
          {screenMode === "login"
            ? Login(setSignupMode, form, login)
            : screenMode === "signup"
            ? Signup(setLoginMode, form, signup)
            : NotFound()}
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
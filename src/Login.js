import React from "react";

function Login() {
  return (
    <div>
      <div className="form">
        <form>
          <div className="input-container">
            <label className="txt">Username </label>
            <input type="text" className="txt1" name="uname" required />
          </div>
          <div className="input-container">
            <label className="pass1">Password </label>
            <input type="password" className="pass" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PwdReset = () => {
  const [email, setEmail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidMail(result);
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/reset-pwd", JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setSuccess(true);
      console.log(result);
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else {
        const { status } = err.response;
        if (status === 404) {
          console.log(err);
          setErrMsg(err.response.data.message);
        } else {
          setErrMsg("Reset Failed");
          console.log(err);
        }
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h2>Reset Password</h2>
          <p>
            A password reset Link has been sent to your Email : {email} , check
            your inbox and click on that link to reset your password.{" "}
          </p>
        </section>
      ) : (
        <section>
          <h2>Reset Password</h2>
          <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email :
              <FontAwesomeIcon
                icon={faCheck}
                className={validMail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validMail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setMailFocus(true)}
              onBlur={() => setMailFocus(false)}
            />
            <p
              id="uidnote"
              className={
                mailFocus && email && !validMail ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              enter a valid email : example@domain.smthn
            </p>
            <button>Reset Password</button>
          </form>
        </section>
      )}
      ;
    </>
  );
};

export default PwdReset;

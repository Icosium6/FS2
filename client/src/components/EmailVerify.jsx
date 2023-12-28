import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useParams } from "react-router-dom";

const EmailVerify = () => {
  const [valid, setValid] = useState(false);
  const { id, token } = useParams();

  useEffect(() => {
    const verify = async () => {
      try {
        const url = `/users/${id}/verify/${token}/`;
        await axios.get(url);
        setValid(true);
      } catch (error) {
        console.log(error);
        setValid(false);
      }
    };

    verify();
  }, [id, token]);

  return (
    <section>
      <h2>Email Verification</h2>
      {valid ? (
        <>
          <p>Your Email has been verified successfully</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      ) : (
        <p>Invalid Link!</p>
      )}
    </section>
  );
};

export default EmailVerify;

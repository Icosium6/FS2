import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";

const PwdVerify = () => {
  const [valid, setValid] = useState(false);
  const { id, token } = useParams();
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const verify = async () => {
      try {
        const url = `/users/${id}/reset/${token}/`;
        const res = await axios.get(url);
        setAuth((prevAuth) => ({
          user: res.data.user,
        }));
        setValid(true);
      } catch (error) {
        console.log(error);
        setValid(false);
      }
    };

    verify();
  }, [id, token]);

  return valid ? (
    <Navigate to="/change-pwd" state={{ from: location }} replace />
  ) : (
    <section>
      <h2>Password Verification</h2>
      <p>Invalid Link!</p>
    </section>
  );
};
export default PwdVerify;

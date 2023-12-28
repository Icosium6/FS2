import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { Typography } from "@mui/material";

const Activate = () => {
  const { auth } = useAuth();
  const [success, setSuccess] = useState(false);
  const sendActivation = async () => {
    try {
      await axios.post("/verify", JSON.stringify({ user_id: auth.user._id }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setSuccess(true);
    } catch (error) {
      console.log("errore:", error);
      setSuccess(false);
    }
  };
  useEffect(() => {
    sendActivation();
  }, []);
  return (
    <section>
      <Typography variant="h1">Account Activation</Typography>
      {success ? (
        <Typography variant="body1">
          A verefication Link has been sent to {auth.user.email}, please check
          your inbox and click the link to activate your account
        </Typography>
      ) : (
        <Typography variant="body1">
          there was a problem sending you the activation link, please try again
        </Typography>
      )}
    </section>
  );
};

export default Activate;

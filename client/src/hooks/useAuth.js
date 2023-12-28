import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;

//this is a custom hook , instead of importing useContext and AuthContext we just need useAuth

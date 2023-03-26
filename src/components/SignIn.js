import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import Button from "@mui/material/Button";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button variant="outlined" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </div>
  );
}

export default SignIn;

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "./config";


// Email + Password Register
export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  await updateProfile(credential.user, {
    displayName: name,
  });

  return credential.user;
}


// Email + Password Login
export async function loginUser(email: string, password: string) {
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return credential.user;
}


// Google Login
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  const credential = await signInWithPopup(auth, provider);

  return credential.user;
}


// Logout
export async function logoutUser() {
  await signOut(auth);
}


// Forgot Password
export async function resetUserPassword(email: string) {
  await sendPasswordResetEmail(auth, email);
}
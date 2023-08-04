// Import the functions you need from the SDKs you need
import app from "./firebaseConfig"
import { getAuth, GoogleAuthProvider,FacebookAuthProvider, signInWithRedirect,signInWithPopup } from "firebase/auth";

//              Authentication
const auth=getAuth(app)


const Googleprovider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, Googleprovider);
      const name = res.user.displayName;
      const email = res.user.email;
  
      localStorage.setItem("FirebaseApplication", {
        userName: name,
        userEmail: email,
      });
      return { name, email };
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        // Handle the case where the user canceled the popup
        console.log("Authentication popup was canceled by the user.");
      } else {
        // Handle other authentication errors
        console.error("Error during Google authentication:", error);
      }
      return null;
    }
  };
  

const Facebookprovider = new FacebookAuthProvider(); // Create an instance using 'new'
export const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, Facebookprovider);
    const name = res.user.displayName;
    const email = res.user.email;

    localStorage.setItem("FirebaseApplication", JSON.stringify({ "userName": name, "userEmail": email }));
    return { name, email };
  } catch (error) {
    if (error.code === "auth/cancelled-popup-request") {
      // Handle the case where the user canceled the popup
      console.log("Authentication popup was canceled by the user.");
    } else {
      // Handle other authentication errors
      console.error("Error during Google authentication:", error);
    }
    return null;
  }
};

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged,
  } from "firebase/auth";

  import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";
  
  initializeAuthentication();
  
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState("");
  
    const auth = getAuth();
  
    const signInUsingGoogle = () => {
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
  
      return signInWithPopup(auth, googleProvider);
        
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRegistration = (e) => {
      e.preventDefault();
      console.log(email, password);
      if (password.length < 6) {
        setError("Password Must be at least 6 characters long.");
        return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError("Password Must contain 2 upper case");
        return;
      }
  
      registerNewUser(email, password);
  
      // if (isLogin) {
      //   processLogin(email, password);
      // } else {
      //   registerNewUser(email, password);
      // }
    };
  
    const processLogin = (e) => {
      // e.preventDefault();
      return signInWithEmailAndPassword(auth, email, password);
        
    };
  
    const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          verifyEmail();
          setUserName();
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
    };
  
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser).then((result) => {
        console.log(result);
      });
    };
  
    const handleResetPassword = () => {
      sendPasswordResetEmail(auth, email).then((result) => {});
    };
  
    // observe user state change
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribed;
    }, []);
    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    };
    return {
      user,
      isLoading,
      handleResetPassword,
      signInUsingGoogle,
      handleRegistration,
      handlePasswordChange,
      handleEmailChange,
      handleNameChange,
      error,
      processLogin,
      logOut,
      setUser,
      setIsLoading,setError
    };
  };
  
  export default useFirebase;
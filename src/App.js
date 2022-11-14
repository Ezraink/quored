import React ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "../src/authentication/Login";
import Quora from "./component/Quora";
import { login, logout, selectUser } from "./features/UserSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        }else {
          dispatch(logout());
        }
        console.log("AuthUser",authUser);
      
    });
  }, [dispatch]);

  return ( 
  <div className="App">
    {user ? <Quora /> : <Login />}</div>
  );
}

export default App;

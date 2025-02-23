// import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        alert("Logging out");
        console.log("Signed out successfully");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav>
        <h1>Welcome To Firebase</h1>

        <br />

        <div>
          <center>
            <button onClick={handleLogout}>Logout</button>
          </center>
        </div>
      </nav>
    </>
  );
};

export default Home;

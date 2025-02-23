// import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {               
        signOut(auth).then(() => {

        // Sign-out successful.
            navigate("./Signup");
            console.log("Signed out successfully")
        })

        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>

                <div>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Home;
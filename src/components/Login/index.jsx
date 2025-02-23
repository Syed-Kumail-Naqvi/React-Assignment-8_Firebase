import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { NavLink, useNavigate } from "react-router-dom";
// import './style.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`Login Successful! Greetings User`);
        navigate("/Home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div className="main">
            <h1> Welcome To Firebase </h1>

            <form>
              <div>
                <table>
                  <tr>
                    <td>
                      <label htmlFor="email-address">Email address</label>
                    </td>

                    <td>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>

                    <td>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </td>
                  </tr>
                </table>
              </div>

              <button onClick={onLogin}>Login</button>
            </form>

            <p>
              No account yet? {""}
              <NavLink to="/">Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;

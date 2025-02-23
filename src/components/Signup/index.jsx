import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert(`Signup Successful!`);
        navigate("/Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div className="main">
          <h1>Welcome To Firebase</h1>
          <form>
            <div>
              <table>
                <tr>
                  <td>
                    <label htmlFor="email-address">Email address</label>
                  </td>

                  <td>
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email Address"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="password">Password</label>
                  </td>

                  <td>
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    />
                  </td>
                </tr>
              </table>
            </div>

            <button type="submit" onClick={onSubmit}>
              Sign up
            </button>
          </form>

          <p>
            Already have an account?{"  "}
            <NavLink to="/Login">Sign in</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;

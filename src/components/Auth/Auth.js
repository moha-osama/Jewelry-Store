import classes from "./Auth.module.css";
import Nav from "../Header/Nav";

import Input from "../UI/Input/Input";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

import { Form, Link, useSearchParams, useNavigation } from "react-router-dom";

const Auth = () => {
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isSubmitting = navigation.state === "submitting";
  const isLogin = searchParams.get("mode") === "login";

  const loginLinkIsAcive = isLogin ? classes.isActive : null;
  const signupLinkIsAcive = !isLogin ? classes.isActive : null;

  return (
    <>
      <header>
        <Nav />
      </header>
      <div className={classes.contianer}>
        <div className={classes.header}>
          <h2>{isLogin ? "Log in" : "Create account"}</h2>
          <nav>
            <ul>
              <li className={loginLinkIsAcive}>
                <Link to="/auth?mode=login">Login</Link>
              </li>
              <li className={signupLinkIsAcive}>
                <Link to="/auth?mode=signup">Create Account</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Form method="POST" className={classes.form}>
          {isLogin ? (
            <div>
              <Input label="Email Address" type="email" name="login-email" />
              <Input label="Password" type="password" name="login-password" />
            </div>
          ) : (
            <div>
              <Input label="First Name" type="text" name="f-name" />
              <Input label="Last Name" type="text" name="l-name" />
              <Input label="Email Address" type="email" name="signup-email" />
              <Input label="Password" type="password" name="signup-password" />
            </div>
          )}
          <div className={classes.actions}>
            {!isSubmitting ? (
              <button type="submit">
                {isLogin ? "Login" : "create account"}
              </button>
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

export default Auth;

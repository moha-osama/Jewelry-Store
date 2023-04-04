import { json, redirect } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import { auth } from "../firebase";

const AuthPage = () => {
  return <Auth />;
};

export default AuthPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");

  const data = await request.formData();

  let authData = {};
  if (mode === "login") {
    authData = {
      email: data.get("login-email"),
      password: data.get("login-password"),
    };
  } else if (mode === "signup") {
    authData = {
      email: data.get("signup-email"),
      password: data.get("signup-password"),
    };
  } else if (mode !== "login" && mode !== "signup") {
    console.log("error");
  }

  const signupAction = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        authData.email,
        authData.password
      );
    } catch {
      throw json({ message: "Invalid email or password" }, { status: 500 });
    }
  };

  const loginAction = async () => {
    try {
      await auth.signInWithEmailAndPassword(authData.email, authData.password);
    } catch {
      throw json(
        { message: "The email or password you entered is incorrect." },
        { status: 500 }
      );
    }
  };

  if (mode === "login") {
    await loginAction();
    return redirect("/products");
  } else if (mode === "signup") {
    await signupAction();
    return redirect("/auth?mode=login");
  }
}

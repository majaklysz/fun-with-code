import AuthDetails from "./components/AuthDetails";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";

export default function Profile() {
  return (
    <>
      <div>
        <h2>ProfilePage</h2>
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    </>
  );
}

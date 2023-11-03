import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomeNoAccount from "./components/HomeNoAccount";
import Home from "./components/Home";
import Nav from "./Nav";
import Profile from "./Profile";
import AuthDetails from "./components/AuthDetails";

function App() {
  const isAuth = AuthDetails().is;
  console.log(isAuth);
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <HomeNoAccount />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

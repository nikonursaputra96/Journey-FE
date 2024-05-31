import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import RootLayout from "./layout/RootLayout";
import Profile from "./component/Profile";
import Bookmark from "./component/Bookmark";
import Detail from "./component/Detail";
import PostCard from "./component/PostCard";
import { BrowserRouter as Router } from "react-router-dom";
import { useAppDispatch } from "./store";
import { getProfile } from "./lib/call/profile";
import { SET_LOGIN } from "./store/slice/auth";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import LoginForm from "./component/Modal/Login";
import RootLayoutLogin from "./layout/RootLayoutLogin";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useAppDispatch();

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await getProfile(token);
      dispatch(SET_LOGIN({ user: res.data.data, token }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const IsLogin = () => {
    if (!localStorage.getItem("token")) {
      return <Navigate to={"/home"} />;
    } else {
      return <Outlet />;
    }
  };

  const IsNotLogin = () => {
    if (localStorage.getItem("token")) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IsLogin />}>
          <Route path="/" element={<RootLayoutLogin />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/post-card" element={<PostCard />} />
          </Route>
        </Route>

        <Route path="/" element={<IsNotLogin />}>
          <Route path="/home" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

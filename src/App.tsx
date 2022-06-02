import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LoggedChecker from "./components/LoggedChecker/LoggedChecker";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TheFactoryPage from "./pages/TheFactoryPage/TheFactoryPage";
import { logInActionCreator } from "./redux/features/userSlice";
import { AppDispatch, RootState } from "./redux/store/store";
import { loadAstrosThunk } from "./redux/thunks/astroThunks/astroThunks";
import { UserInfo } from "./types/types";

const App = (): JSX.Element => {
  const logged = useSelector((state: RootState) => state.user.logged);

  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const token: string | null = localStorage.getItem("TokenKey");
    if (token) {
      const userInfo: UserInfo = jwtDecode(token);
      dispatch(logInActionCreator(userInfo));
      navigate("/thefactory");

      dispatch(loadAstrosThunk());
    }
  }, [dispatch, logged, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route
          path="/thefactory"
          element={
            <LoggedChecker>
              <TheFactoryPage />
            </LoggedChecker>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

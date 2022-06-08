import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoggedChecker from "./components/LoggedChecker/LoggedChecker";
import AssembleMutantPage from "./pages/AssembleMutanPage/AssembleMutantPage";
import AstrosPage from "./pages/AstrosPage/AstrosPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import EditMutantPage from "./pages/EditMutantPage/EditMutantPage";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import MyCollectionPage from "./pages/MyCollectionPage/MyCollectionPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TheFactoryPage from "./pages/TheFactoryPage/TheFactoryPage";
import { logInActionCreator } from "./redux/features/userSlice";
import { AppDispatch, RootState } from "./redux/store/store";
import { UserInfo } from "./types/types";

const App = (): JSX.Element => {
  const logged = useSelector((state: RootState) => state.user.logged);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const token: string | null = localStorage.getItem("TokenKey");
    if (token) {
      const userInfo: UserInfo = jwtDecode(token);
      dispatch(logInActionCreator(userInfo));
    }
  }, [dispatch, logged]);

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
        <Route
          path="/astros"
          element={
            <LoggedChecker>
              <AstrosPage />
            </LoggedChecker>
          }
        />
        <Route
          path="/myinventory"
          element={
            <LoggedChecker>
              <MyCollectionPage />
            </LoggedChecker>
          }
        />
        <Route
          path="/details/:astroType/:id"
          element={
            <LoggedChecker>
              <DetailsPage />
            </LoggedChecker>
          }
        />
        <Route
          path="/assemble"
          element={
            <LoggedChecker>
              <AssembleMutantPage />
            </LoggedChecker>
          }
        />
        <Route
          path="/editmutant/:idMutantAstro"
          element={
            <LoggedChecker>
              <EditMutantPage />
            </LoggedChecker>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

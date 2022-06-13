import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import LoggedChecker from "./components/LoggedChecker/LoggedChecker";
import AssembleMutantPage from "./pages/AssembleMutantPage/AssembleMutantPage";
import AstrosPage from "./pages/AstrosPage/AstrosPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import EditMutantPage from "./pages/EditMutantPage/EditMutantPage";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import MyCollectionPage from "./pages/MyCollectionPage/MyCollectionPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
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
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route
          path="/thefactory"
          element={
            <LoggedChecker>
              <>
                <Header />
                <TheFactoryPage />
              </>
            </LoggedChecker>
          }
        />
        <Route
          path="/astros"
          element={
            <LoggedChecker>
              <>
                <Header />
                <AstrosPage />
              </>
            </LoggedChecker>
          }
        />
        <Route
          path="/myinventory"
          element={
            <LoggedChecker>
              <>
                <Header />
                <MyCollectionPage />
              </>
            </LoggedChecker>
          }
        />
        <Route
          path="/details/:astroType/:id"
          element={
            <LoggedChecker>
              <>
                <Header />
                <DetailsPage />
              </>
            </LoggedChecker>
          }
        />
        <Route
          path="/assemble"
          element={
            <LoggedChecker>
              <>
                <Header />
                <AssembleMutantPage />
              </>
            </LoggedChecker>
          }
        />
        <Route
          path="/editmutant/:idMutantAstro"
          element={
            <LoggedChecker>
              <>
                <Header />
                <EditMutantPage />
              </>
            </LoggedChecker>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

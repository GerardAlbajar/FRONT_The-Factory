import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { LoggedCheckerProps } from "../../types/types";

const LoggedChecker = ({ children }: LoggedCheckerProps) => {
  const logged = useSelector((state: RootState) => state.user.logged);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate("/login");
  });

  if (logged) {
    return children;
  } else {
    return null;
  }
};

export default LoggedChecker;

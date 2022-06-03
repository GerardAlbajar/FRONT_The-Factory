import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedCheckerProps } from "../../types/types";

const LoggedChecker = ({ children }: LoggedCheckerProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TokenKey");
    if (!token) navigate("/login");
  }, [navigate]);

  return children;
};

export default LoggedChecker;

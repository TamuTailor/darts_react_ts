import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useClear } from "../../hooks/useClear";
import { Select } from "../molecules/Select";
import { Header } from "../organisms/Header";

export const Home = () => {
  const { clearValue } = useClear();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      clearValue();
    }
  }, [location]);

  return (
    <>
      <Header />
      <Select />
    </>
  );
};

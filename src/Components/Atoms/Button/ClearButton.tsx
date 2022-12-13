import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useClear } from "../../../hooks/useClear";

export const ClearButton = () => {
  const { clearValue} = useClear()
  const navigate = useNavigate();

  const Clear = () => {
    clearValue
    navigate("/");
  };
  return <Button onClick={() => Clear()}></Button>;
};

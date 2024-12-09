import { Button } from "@chakra-ui/react";
import { css, SerializedStyles } from "@emotion/react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: string;
  path: string;
  style: SerializedStyles;
};

export const LinkButton = (props: Props) => {
  const { children, path ,style} = props;
  const navigate = useNavigate();

  const pageJump = (path: string) => {
    navigate("/"+path);
  };
  return (
    <Button css={style} onClick={() => pageJump(path)}>
      {children}
    </Button>
  );
};



import { Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: string;
  path: string;
};

export const LinkButton = (props: Props) => {
  const { children, path } = props;
  const navigate = useNavigate();

  const pageJump = (path: string) => {
    navigate("/"+path);
  };
  return (
    <Button css={styles.button} onClick={() => pageJump(path)}>
      {children}
    </Button>
  );
};

const styles = {
  button: css`
    width: 150px;
  `,
};

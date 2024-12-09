import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { LinkButton } from "../Atoms/Button/LinkButton";

export const Select = () => {
  return (
    <Box css={styles.box}>
      <Box css={styles.in}>
        <LinkButton style={styles.button} path="zeroone">01</LinkButton>
        <LinkButton style={styles.button}  path="cricket">CRICKET</LinkButton>
      </Box>
    </Box>
  );
};

const styles = {
  box: css`
    width: 100%;
    justify-content: space-between;
    max-width: 650px;
    margin: 0 auto;
  `,
  in: css`

    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  `,
   button:css`
      width: 150px;
      margin-bottom: 8px;
    `,
  };

;


import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { LinkButton } from "../Atoms/Button/LinkButton";

export const Select = () => {
  return (
    <Box css={styles.box}>
      <LinkButton path="">Home</LinkButton>
      <Box>
        <LinkButton path="zeroone">01</LinkButton>
        <LinkButton path="cricket">CRICKET</LinkButton>
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
};

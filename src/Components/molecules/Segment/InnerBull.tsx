import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const InnerBull = () => {
  return <Box css={styles.inner} />;
};

const styles = {
  inner: css`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 6%;
    width: 6%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: black;
    z-index: 7;
  `,
};

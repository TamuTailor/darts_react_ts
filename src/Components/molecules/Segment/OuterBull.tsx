import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";


export const OuterBull = () => {
  return <Box css={styles.outer} />;
};

const styles = {
  outer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 12.5%;
    width: 12.5%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: red;
    z-index: 6;
  `,
};

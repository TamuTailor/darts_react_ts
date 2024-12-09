import { Box, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export const Header = (props: Props) => {
  const { children } = props;
  return <Box css={styles.box}>{children}</Box>;
};

const styles = {
  box: css`
    margin-top: -10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #770303;
  `,
};

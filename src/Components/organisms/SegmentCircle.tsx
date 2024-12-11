import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Double } from "../molecules/Segment/Double";
import { InnerBull } from "../molecules/Segment/InnerBull";
import { Numbers } from "../molecules/Segment/Numbers";
import { OutBord } from "../molecules/Segment/OutBord";
import { OuterBull } from "../molecules/Segment/OuterBull";
import { Single } from "../molecules/Segment/Single";
import { Triple } from "../molecules/Segment/Triple";

export const SegmentCircle = () => {


  return (
    <Box>
    <Box css={styles.circle}>
      <InnerBull />
      <OuterBull />
      <Single position="inner" />
      <Triple />
      <Single position="outer" />
      <Double />
      <Numbers /> 
    </Box>
    <OutBord />
    </Box>
  );
};

const styles = {
  circle: css`
    position: relative;
    height: 75vw;
    width: 75vw;
    background-color: rgb(1, 10, 51);
    border-radius: 50%;

    @media screen and (min-width: calc(750px/0.7)) {
      height: calc(80vh - 45px);
      width: calc(80vh - 45px);
      /* width: calc(95vh - 45px); */
    }
  `,
};

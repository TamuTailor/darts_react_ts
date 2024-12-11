import { Box } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import { useAtom, useSetAtom } from "jotai";
import React from "react";
import { number, magnification, throwCount,  increment } from "../../../Atom";

type Props = {
  styles: SerializedStyles;
  m: number;
};

export const DefaultSegment = (props: Props) => {
  const { styles, m } = props;

  const setNum = useSetAtom(number);
  const setMagni = useSetAtom(magnification);
  const [thro, setthrow] = useAtom(throwCount);
  const [inc, setInc] = useAtom(increment)
  const counts = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
  ];

  const hitNumber = (count: number) => {
    if (thro < 3) {
      setNum(count);
      setMagni(m);
      setthrow(thro + 1);
    }
  };

  return (
    <React.Fragment>
      {counts.map((count, index) => (
        <Box
          key={index}
          css={styles}
          sx={{
            transform: `translate(-50%,-100%) rotate(${18 * index - 1}deg)`,
          }}
          onClick={() => hitNumber(count)}
        />
      ))}
    </React.Fragment>
  );
};

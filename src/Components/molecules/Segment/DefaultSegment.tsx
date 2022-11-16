import { Box } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import React, { useContext } from "react";
import { gameoption } from "../../templates/Bord/Fat";

type Props = {
  styles: SerializedStyles;
  magnification: number;
};


export const DefaultSegment = (props: Props) => {
  const { styles, magnification } = props;
 const option = useContext(gameoption)

  const counts = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
  ];
  const hitNumber = (count: number) => {
    if (option === "cricket") {
      alert(count+"cri");
    } else if (option === "sepa") {
      alert("sepa");
    } else {
      alert(count * magnification);
    }
  };

  return (
    <React.Fragment>
      {counts.map((count, index) => (
        <Box
          key={count}
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

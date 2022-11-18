import { Box } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import React, { useContext} from "react";
import {  setStateContext } from "../../templates/Bord/Fat";

type Props = {
  styles: SerializedStyles;
  magnification: number;
};


export const DefaultSegment = (props: Props) => {
  const { styles, magnification } = props;
 const {setNumber} = useContext(setStateContext)
 const {setMagnification} = useContext(setStateContext)
 const {setthrowCount} = useContext(setStateContext)
 const {throwCount} = useContext(setStateContext)


  const counts = [
    20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
  ];
 
  const hitNumber = (count: number) => {
      setNumber(count)
      setMagnification(magnification)
      setthrowCount(throwCount+1)
     
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

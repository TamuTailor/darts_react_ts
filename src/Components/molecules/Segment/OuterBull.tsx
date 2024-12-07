import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { magnification, number, sepaOption, throwCount } from "../../../Atom";



export const OuterBull = () => {
 const setNum = useSetAtom(number);
    const setMagni = useSetAtom(magnification);
    const [thro, setthrow] = useAtom(throwCount);
    const sepa = useAtomValue(sepaOption);



  const hitNumber = (count: number) => {

   
    if (thro < 3) {
      setNum(count);
      setthrow(thro + 1); 
      if(sepa === "sepa"){
        setMagni(1);
      } else{
        setMagni(2)
      }

    }
    
    };

  return <Box onClick={() => hitNumber(25)} css={styles.outer} />;
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

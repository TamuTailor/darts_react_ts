import { Box, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { magnification, number, sepaOption, throwCount } from "../../../Atom";



export const OutBord = () => {
 const setNum = useSetAtom(number);
    const setMagni = useSetAtom(magnification);
    const [thro, setthrow] = useAtom(throwCount);
    const sepa = useAtomValue(sepaOption);



  const hitNumber = (count: number) => {
    if (thro < 3) {
      setNum(count);
      setthrow(thro + 1); 
      setMagni(0);
    }
    
    };

  return <Button onClick={() => hitNumber(0)} css={styles.out}>OUT</Button>;
};

const styles = {
  out: css`
  width:120px;
  font-size: 24px;
  font-weight: 700;
  height: 50px;

  `,
};

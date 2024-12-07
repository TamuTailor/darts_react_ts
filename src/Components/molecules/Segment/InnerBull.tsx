import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useSetAtom } from "jotai";
import { magnification, number, throwCount } from "../../../Atom";




export const InnerBull = () => {

  const setNum = useSetAtom(number);
  const setMagni = useSetAtom(magnification);
  const [thro, setthrow] = useAtom(throwCount);


  const hitNumber = (count:number) => {
    if (thro < 3) {
      setNum(count);
      setMagni(2);
      setthrow(thro + 1);
    }
}
  return <Box onClick={()=>hitNumber(25)} css={styles.inner} />;
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

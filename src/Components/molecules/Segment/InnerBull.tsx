import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { setStateContext } from "../../templates/Bord/Fat";



export const InnerBull = () => {
  const {setNumber} = useContext(setStateContext)
  const {setMagnification} = useContext(setStateContext)
  const {setthrowCount} = useContext(setStateContext)
  const {throwCount} = useContext(setStateContext)

  const hitNumber = (count:number) => {
  setNumber(count)
  setMagnification(2)
  setthrowCount(throwCount+1)

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

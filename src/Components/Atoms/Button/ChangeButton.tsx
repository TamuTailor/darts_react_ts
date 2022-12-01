import { Button } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";
import { useSetAtom } from "jotai";

import { magnification, number, roundSum, throwCount } from "../../../Atom";

type Props = {
  style: SerializedStyles;
};

export const ChangeButton = (props: Props) => {
  const { style } = props;

  const setNum = useSetAtom(number);
  const setthrow = useSetAtom(throwCount);
  const setRSum = useSetAtom(roundSum);

  const Change = () => {
    setNum(0);
    setthrow(0);
    setRSum(0);
  };

  return <Button css={style} onClick={() => Change()}></Button>;
};

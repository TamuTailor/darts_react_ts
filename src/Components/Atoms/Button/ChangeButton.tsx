import { Button } from "@chakra-ui/react";
import { SerializedStyles } from "@emotion/react";

import { useChangeAction } from "../../../hooks/useChangeAction";

type Props = {
  style: SerializedStyles;
};

export const ChangeButton = (props: Props) => {
  const { style } = props;
  const { Change} = useChangeAction()

  return <Button css={style} onClick={() => Change()}></Button>;
};

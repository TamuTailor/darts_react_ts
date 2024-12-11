import { Td } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useAtom, useAtomValue } from "jotai";
import {
  close20,
  cricketTableArray,
  increment,
  nowThrowPlayer,
  playerCount,
  throwCount,
} from "../../../Atom";
import { useClose } from "../../../hooks/useClose";
import { Close } from "../../Atoms/Marks/Close";
import { OneMark } from "../../Atoms/Marks/OneMark";
import { ThreeMark } from "../../Atoms/Marks/ThreeMark";
import { TwoMark } from "../../Atoms/Marks/TwoMark";
import { ZeroMark } from "../../Atoms/Marks/ZeroMark";

type Props = {
  n: number;
  p: number;
};

export const MarkCount = (props: Props) => {
  const { n, p } = props;
  const [ctArray, setCTArray] = useAtom(cricketTableArray);
  const [c20, setC20] = useAtom(close20);
  const [ntPlayer, setNtPlayer] = useAtom(nowThrowPlayer);
  const [pCount, setPCount] = useAtom(playerCount);
  const t = useAtomValue(throwCount);
  const [inc, setInc] = useAtom(increment);
  const {
    isFirstClose20,
    isFirstClose19,
    isFirstClose18,
    isFirstClose17,
    isFirstClose16,
    isFirstClose15,
    isFirstClosebull,
  } = useClose();

  return (
    <>
      {n === 20 ? (
        <Td>
          {ctArray[p - 1].twenty === 1 ? (
            <OneMark  />
          ) : ctArray[p - 1].twenty === 2 ? (
            <TwoMark  />
          ) : ctArray[p - 1].twenty >= 3 ? (
            isFirstClose20.current && pCount !== 1 ? (
              <>
                <Close>
                  <ThreeMark />
                </Close>
              </>
            ) : (
              <ThreeMark />
            )
          ) : (
            <ZeroMark  />
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 19 ? (
        <Td>
          {ctArray[p - 1].nineteen === 1 ? (
            <OneMark />
          ) : ctArray[p - 1].nineteen === 2 ? (
            <TwoMark />
          ) : ctArray[p - 1].nineteen >= 3 ? (
            isFirstClose19.current  && pCount !== 1 ? (
              <Close>
                <ThreeMark />
              </Close>
            ) : (
              <ThreeMark  />
            )
          ) : (
            <ZeroMark />
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 18 ? (
        <Td>
          {ctArray[p - 1].eighteen === 1 ? (
            <OneMark />
          ) : ctArray[p - 1].eighteen === 2 ? (
            <TwoMark />
          ) : ctArray[p - 1].eighteen >= 3 ? (
            isFirstClose18.current  && pCount !== 1 ? (
              <Close>
                <ThreeMark />
              </Close>
            ) : (
              <ThreeMark />
            )
          ) : (
            <ZeroMark />
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 17 ? (
        <Td>
          {ctArray[p - 1].seventeen === 1 ? (
            <OneMark />
          ) : ctArray[p - 1].seventeen === 2 ? (
            <TwoMark />
          ) : ctArray[p - 1].seventeen >= 3 ? (
            isFirstClose17.current  && pCount !== 1 ? (
              <Close>
                <ThreeMark />
              </Close>
            ) : (
              <ThreeMark />
            )
          ) : (
            <ZeroMark />
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 16 ? (
        <Td>
          {ctArray[p - 1].sixteen === 1 ? (
            <OneMark />
          ) : ctArray[p - 1].sixteen === 2 ? (
            <TwoMark />
          ) : ctArray[p - 1].sixteen >= 3 ? (
            isFirstClose16.current  && pCount !== 1 ? (
              <Close>
                <ThreeMark />
              </Close>
            ) : (
              <ThreeMark />
            )
          ) : (
            <ZeroMark />
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 15 ? (
        <Td>
          {ctArray[p - 1].fifteen === 1 ? (
            <OneMark />
          ) : ctArray[p - 1].fifteen === 2 ? (
            <TwoMark />
          ) : ctArray[p - 1].fifteen >= 3 ? (
            isFirstClose15.current  && pCount !== 1 ? (
              <Close>
                <ThreeMark />
              </Close>
            ) : (
              <ThreeMark />
            )
          ) : (
            <ZeroMark />
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 25 ? (
        <Td>
          {ctArray[p - 1].bull === 1 ? (
            <OneMark />
          ) : ctArray[p - 1].bull === 2 ? (
            <TwoMark />
          ) : ctArray[p - 1].bull >= 3 ? (
            isFirstClosebull.current  && pCount !== 1 ? (
              <Close>
                <ThreeMark />
              </Close>
            ) : (
              <ThreeMark />
            )
          ) : (
            <ZeroMark />
          )}
        </Td>
      ) : (
        <></>
      )} 
    </>
  );
};

const styles = {
  one: css`
    position: absolute;
    width: 110%;
    height: 10px;
    top: 4%;
    right: 5%;
    background-color: white;
    transform: rotate(-45deg);
    transform-origin: 98% 100%;
    @media screen and (max-width: 600px) {
          height: 6px;
    }
  `,
  two: css`
    position: absolute;
    width: 110%;
    height: 10px;
    top: 4%;
    left: 5%;
    background-color: white;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    @media screen and (max-width: 600px) {
          height: 6px;
    }
  `,
  three: css`
    position: absolute;
    top: 10%;
    right: 10%;
    background-color: transparent;
    transform-origin: 0% 100%;
    display: inline-block;
    width: 80%;
    height:80%;
    border-radius: 50%;
    border: solid 10px white;
    @media screen and (max-width: 600px) {
          border: solid 6px white;
     
    }
  `,  MarkContainer:css`
        background-color: #111111;
        position: relative;
        height: 90px;
        box-sizing: border-box;
        aspect-ratio: 1; 
        @media screen and (max-width: 600px){
            height: 50px;
        }
    `
}
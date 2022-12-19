import { Td } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import { cricketTableArray } from "../../../Atom";
import { OneMark } from "../../Atoms/Marks/OneMark";
import { ThreeMark } from "../../Atoms/Marks/ThreeMark";
import { TwoMark } from "../../Atoms/Marks/TwoMark";

export const MarkCount = (props: any) => {
  const { n ,p} = props;
  const [ctArray, setCTArray] = useAtom(cricketTableArray);
  return (
    <>
      {n === 20 ? (
        <Td>
          {ctArray[p-1].twenty === 1 ? (
            <OneMark />
          ) : ctArray[p-1].twenty === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].twenty >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 19 ? (
        <Td>
          {ctArray[p-1].nineteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].nineteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].nineteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 18 ? (
        <Td>
          {ctArray[p-1].eighteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].eighteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].eighteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 17 ? (
        <Td>
          {ctArray[p-1].seventeen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].seventeen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].seventeen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 16 ? (
        <Td>
          {ctArray[p-1].sixteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].sixteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].sixteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 15 ? (
        <Td>
          {ctArray[p-1].fifteen === 1 ? (
            <OneMark />
          ) : ctArray[p-1].fifteen === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].fifteen >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
      {n === 25 ? (
        <Td>
          {ctArray[p-1].bull === 1 ? (
            <OneMark />
          ) : ctArray[p-1].bull === 2 ? (
            <TwoMark />
          ) : ctArray[p-1].bull >= 3 ? (
            <ThreeMark />
          ) : (
            <></>
          )}
        </Td>
      ) : (
        <></>
      )}
    </>
  );
};

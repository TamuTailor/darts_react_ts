import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { ChangeButton } from "../../Atoms/Button/ChangeButton";
import { SegmentCircle } from "../../organisms/SegmentCircle";

type setTypeObject = {
    setNumber: Dispatch<SetStateAction<number>>;
    setMagnification: Dispatch<SetStateAction<number>>;
    setthrowCount: Dispatch<SetStateAction<number>>;
    throwCount:number
    setRoundSum: Dispatch<SetStateAction<number>>;
  };

export const gameoption = createContext("");
export const setStateContext = createContext({} as setTypeObject);

export const Fat = () => {
  const [number, setNumber] = useState<number>(0);
  const [magnification, setMagnification] = useState<number>(0);
  const [throwCount, setthrowCount] = useState<number>(1);
  const [roundSum, setRoundSum] = useState<number>(0);

  useEffect(()=>{
    // alert(number*magnification)
    let point:number = number*magnification
    let sum:number = 0

    if(throwCount <= 4){
        sum = roundSum + point
        setRoundSum(sum)
    }
  },[throwCount])

  return (
    <React.Fragment>  
        <p>ラウンド得点{number*magnification}</p>
        <p>round{throwCount}</p>
        <p>合計{roundSum}</p>
        <setStateContext.Provider value={{setNumber,setMagnification,setthrowCount,throwCount,setRoundSum}}>
          <SegmentCircle  />
          {
            throwCount > 3 ? <div>
            <p>round{throwCount-1}</p>
          </div>:<></>
          }
          <ChangeButton />

        </setStateContext.Provider>
      {/* <ファットの表コンポーネント> */}
    </React.Fragment>
  );
};

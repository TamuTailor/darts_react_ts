import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { SegmentCircle } from "../../organisms/SegmentCircle";

type setTypeObject = {
    setNumber: Dispatch<SetStateAction<number>>;
    setMagnification: Dispatch<SetStateAction<number>>;
    setthrowCount: Dispatch<SetStateAction<number>>;
    throwCount:number
  };

export const gameoption = createContext("");
export const setStateContext = createContext({} as setTypeObject);

export const Fat = () => {
  const [number, setNumber] = useState<number>(0);
  const [magnification, setMagnification] = useState<number>(0);
  const [throwCount, setthrowCount] = useState<number>(0);

  useEffect(()=>{
    // alert(number*magnification)
    if(throwCount < 3 && throwCount > 0){
        // alert(number*magnification)
    }else if(throwCount === 3){
        // alert(number*magnification)
        setthrowCount(0)
    }
  },[throwCount])

  return (
    <React.Fragment>  
        <p>{number*magnification}</p>
      {/* <gameoption.Provider value="fat"> */}
        <setStateContext.Provider value={{setNumber,setMagnification,setthrowCount,throwCount}}>
          <SegmentCircle />
        </setStateContext.Provider>
      {/* </gameoption.Provider> */}
    
      {/* <ファットの表コンポーネント> */}
    </React.Fragment>
  );
};

import React, { createContext } from 'react'
import { SegmentCircle } from '../../organisms/SegmentCircle'
import { gameoption } from "../../templates/Bord/Fat";


export const Sepa=()=> {
  return (
    <React.Fragment>
        <gameoption.Provider value="sepa">
             <SegmentCircle  />
        </gameoption.Provider>
        {/* <ファットの表コンポーネント> */}
    </React.Fragment>
  )
}

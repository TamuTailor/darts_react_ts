import React from "react"
import { SegmentCircle } from "../../organisms/SegmentCircle"
import { gameoption } from "../../templates/Bord/Fat";


export const CulCrike=()=> {
  return (
    <React.Fragment>
        <gameoption.Provider value="cricket">
             <SegmentCircle  />
        </gameoption.Provider>
        {/* <ファットの表コンポーネント> */}
    </React.Fragment>
  )
}

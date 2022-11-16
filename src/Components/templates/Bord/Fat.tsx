import React, { createContext } from 'react'
import { SegmentCircle } from '../../organisms/SegmentCircle'

export const gameoption = createContext("")

export const Fat = () => {
    

  return (
    <React.Fragment>
        <gameoption.Provider value="fat">
             <SegmentCircle  />
        </gameoption.Provider>
        {/* <ファットの表コンポーネント> */}
    </React.Fragment>
  )
}

import { Button } from '@chakra-ui/react'
import { SerializedStyles } from '@emotion/react'
import { useContext } from 'react'
import { setStateContext } from '../../templates/Bord/Fat'

type Props = {
  style:SerializedStyles
}


export const ChangeButton = (props:Props) => {
  const { style } = props
  const {setthrowCount} = useContext(setStateContext)
  const {setRoundSum} = useContext(setStateContext)
  const {setNumber} = useContext(setStateContext)
 

  const Change = ()=>{
    setthrowCount(0)
    setRoundSum(0)
    setNumber(0)
    
  }

  return (
    <Button css={style} onClick={()=>Change()}></Button>
  )
}

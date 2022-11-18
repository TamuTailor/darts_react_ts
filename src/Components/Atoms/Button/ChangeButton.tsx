import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { setStateContext } from '../../templates/Bord/Fat'


export const ChangeButton = () => {
  const {setthrowCount} = useContext(setStateContext)
  const {setRoundSum} = useContext(setStateContext)
  const {setNumber} = useContext(setStateContext)
 

  const Change = ()=>{
    setthrowCount(0)
    setRoundSum(0)
    setNumber(0)
    
  }

  return (
    <Button onClick={()=>Change()}>Change</Button>
  )
}

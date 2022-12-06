import { Box, StylesProvider, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { ChangeButton } from '../Atoms/Button/ChangeButton'

export const Change = () => {
  
  return (
    <Box css={styles.box}>
        <Box css={styles.box_inner}>
            <Text css={styles.text}>PLAYER CHANGE</Text>
            <Box css={styles.button_container}>
                <ChangeButton  style={styles.button}/>
                <Box css={[styles.allow,styles.anim]}></Box>
            </Box>
        </Box>
    </Box>
  )
}

const styles = {
    box:css`
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    `,
    box_inner:css`
        height: 180px;
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 99;
        display: flex;
        justify-content: center;
        transform: translate(-50%,-50%);
        align-items: center;
    `,
    button_container:css`
      position: relative;
        height: 100%;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 60px;
    `,
    button:css`
        z-index: 100;
        height: 50%;
        aspect-ratio: 2;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
        background-color: red;
        box-shadow: 0px 6px 7px 2px #000000ee,0px -12px 3px 3px #000000 inset ;
    `,
    text:css`
        font-size: 100px;
        color: white;
    `,
    allow:css`
        position: absolute;
        top: 0;
        vertical-align: middle;
        color: #333;
        line-height: 1;
        width: 0;
        height: 0;
        border-style:solid ;
        border-color: transparent;
        border-width: 50px 50px;
        border-top-color: red;
        border-bottom: 0;
    `,
    anim:css`
        -webkit-animation: blink 0.9s ease-in-out infinite alternate;
        -moz-animation:blink 0.9s ease-in-out infinite alternate ;
        animation: blink 0.9s ease-in-out infinite alternate;
        @-webkit-keyframes blink{
            0%{
              opacity: 0;
              transform: translateY(-20px);
            }
            100%{
                opacity: 1;
              transform: translateY(0px);
            }  
        }
        @-moz-keyframes blink{
            0%{
              opacity: 0;
              transform: translateY(-20px);
            }
            100%{
                opacity: 1;
              transform: translateY(0px);
            }  
        }
        @keyframes blink{
            0%{
              opacity: 0;
              transform: translateY(-20px);
            }
            100%{
                opacity: 1;
              transform: translateY(0px);
            }  
        }
    `

}
import { css } from '@emotion/react'
import { LinkButton } from './LinkButton'

export const HomeButton = () => {
  return (
    <LinkButton style={styles.button}  path="">Home</LinkButton>
  )
}

const styles = {
    button:css`
        width: 50px;
        height: 50px;
    `
}
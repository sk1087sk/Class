import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { ThemeContext } from '../../utils/context'
// import { useContext } from 'react'

const FooterContainer = styled.footer`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding-top: 60px;
`

const NightModeButton = styled.button`
   background-color: transparent;
   //    border: none;
   cursor: pointer;
   color: ${colors.secondary};
`

function Footer() {
   // const { toggleTheme, theme } = useContext(ThemeContext)

   return (
      <ThemeContext.Consumer>
         {({ toggleTheme, theme }) => (
            <FooterContainer>
               <NightModeButton onClick={() => toggleTheme()}>
                  Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
               </NightModeButton>
            </FooterContainer>
         )}
      </ThemeContext.Consumer>
   )
}

export default Footer

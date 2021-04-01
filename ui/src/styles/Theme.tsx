import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface ITheme {
    primaryColor: string
    secondaryColor: string
    white: string
    fontColor: string
}


const theme: ITheme = {
    primaryColor: '#F7CE5B',
    secondaryColor: '#755706',
    white: '#fff',
    fontColor: '#4D4D4D'
}

interface Props {
    children: ReactNode
}


const Theme = ({children}: Props) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
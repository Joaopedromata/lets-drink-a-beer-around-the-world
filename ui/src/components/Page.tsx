import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
}

const Page = ({ className, children }: Props) => {
    return (
        <section className={className}>{children}</section>
    )   
}

export default styled(Page)`
    height: 100vh;
    width: 100vw;
    background: ${(props) => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
`
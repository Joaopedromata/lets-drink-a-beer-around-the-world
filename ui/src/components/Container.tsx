import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
}

const Container = ({ className, children }: Props) => {
    return (
        <section className={className}>{children}</section>
    )   
}

export default styled(Container)`
    height: 900px;
    width: 1240px;
    display: flex;
    justify-content: center;
    align-items: center;
`
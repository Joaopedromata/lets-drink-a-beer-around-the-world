import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
}

const Grid = ({ className, children }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(Grid)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
`
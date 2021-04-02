import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
}

const Cell = ({ className, children }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(Cell)`
    min-height: 70px;
    border-bottom: 1px solid ${(props) => props.theme.gray};
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
        border-bottom: none;
    }
`    
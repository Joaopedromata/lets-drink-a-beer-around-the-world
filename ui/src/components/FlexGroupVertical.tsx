import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    height: string
    children: ReactNode
}


const FlexGroupVertical = ({ className, children }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(FlexGroupVertical)`
    height: ${(props) => props.height};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
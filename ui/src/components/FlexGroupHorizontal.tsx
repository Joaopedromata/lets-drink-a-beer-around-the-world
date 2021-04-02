import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    width: string
    children: ReactNode
}


const FlexGroupHorizontal = ({ className, children }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(FlexGroupHorizontal)`
    width: ${(props) => props.width};
    display: flex;
    justify-content: space-between;
    align-items: center;

`
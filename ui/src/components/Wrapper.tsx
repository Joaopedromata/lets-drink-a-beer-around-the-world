import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
    width: string
}


const Wrapper = ({className, children}: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(Wrapper)`
    height: 100%;
    width: ${(props) => props.width};

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
    height: string
}


const Table = ({ className, children }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(Table)`
    width: 100%;
    height: ${(props) => props.height};
    border-radius: 8px;
    background: ${(props) => props.theme.white};
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.secondaryColor};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 50%;
    }
`
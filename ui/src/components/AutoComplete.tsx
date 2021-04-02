import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    className?: string
    children: ReactNode
}


const AutoComplete = ({ className, children }: Props) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default styled(AutoComplete)`
    z-index: 9999;
    width: 100%;
    height: 300px;
    border-radius: 8px;
    background: ${(props) => props.theme.lightGray};
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.gray};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 50%;
    }
`
import styled from 'styled-components'

interface Props {
    className?: string
    text?: string
    styles: string
    onClick: () => void
}


const Button = ({ className, text, onClick }: Props) => {
    return <button className={className} onClick={onClick}>{text}</button>
}

export default styled(Button)`
    background: ${props => props.styles === 'PRIMARY' ? props.theme.primaryColor : props.styles === 'SECONDARY' && props.theme.secondaryColor}; 
    width: 340px;
    height: 90px;
    font-size: 50px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
    border-radius: 8px;
    transition: filter 300ms;
    cursor: pointer;

    &:hover {
        filter: brightness(90%)
    }

`
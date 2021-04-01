import styled from 'styled-components'

interface Props {
    className?: string
    text: string
}

const Title = ({ text, className }: Props) => {
    return (
        <p className={className}>{text}</p>
    )
}

export default styled(Title)`
    font-size: 70px;
    font-weight: 600;

    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`
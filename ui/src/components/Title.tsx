import styled from 'styled-components'

interface Props {
    className?: string
    text: string,
    fontSize: string
}

const Title = ({ text, className, fontSize }: Props) => {
    return (
        <p className={className}>{text}</p>
    )
}

export default styled(Title)`
    font-size: ${(props) => props.fontSize};
    font-weight: 600;

    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`
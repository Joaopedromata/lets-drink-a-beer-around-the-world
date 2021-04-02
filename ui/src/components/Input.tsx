import styled from 'styled-components'

interface Props {
    className?: string
    placeholder?: string
    value: string
    onChange: (value: string) => void
}

const Input = ({ className, placeholder, value, onChange }: Props) => {
    return (
        <input 
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    )
}

export default styled(Input)`
    height: 60px;
    border-radius: 8px;

    font-size: 25px;
    width: 500px;
    padding: 0 15px;
    
    color: ${(props) => props.theme.fontColor};
    position: relative;
    margin-bottom: 2px;
`
import styled from 'styled-components'
import Button from '../components/Button'
import Container from '../components/Container'
import FlexGroupVertical from '../components/FlexGroupVertical'
import Grid from '../components/Grid'
import LandingImage from '../components/LandingImage'
import Title from '../components/Title'
import { Link, useHistory } from 'react-router-dom'
import Wrapper from '../components/Wrapper'

interface Props {
    className?: string
}


const Landing = ({ className }: Props) => {
    
    const history = useHistory()

    return (
        <Container>
            <Grid className={className}>
                <Wrapper width="600px">
                    <Title fontSize="70px" text="Let's travel to drink a beer?" />
                    <FlexGroupVertical height="150px">
                        <Button styles="SECONDARY" text="Let's go!!" onClick={() => history.push('/shuffle')}/>
                        <Link className="a" to="/filter">or search by filters</Link> 
                    </FlexGroupVertical>
                </Wrapper>
                <Wrapper width='600px'>
                    <LandingImage size={{height: 650, width: 740}}/>
                </Wrapper>
            </Grid>
        </Container>
    )
}

export default styled(Landing)`

    .a {
        color: ${(props) => props.theme.secondaryColor}
    }
`
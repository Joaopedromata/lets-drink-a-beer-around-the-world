import styled from 'styled-components'
import Button from '../components/Button'
import Container from '../components/Container'
import FlexGroupVertical from '../components/FlexGroupVertical'
import Grid from '../components/Grid'
import LandingImage from '../components/LandingImage'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

interface Props {
    className?: string
}


const Landing = ({ className }: Props) => {
    return (
        <Container>
            <Grid className={className}>
                <div className="wrapper">
                    <Title text="Let's travel to drink beer?" />
                    <FlexGroupVertical height={150}>
                        <Button style="SECONDARY" text="Let's go!!" />
                        <Link className="a" to="/filter">or search by filters</Link> 
                    </FlexGroupVertical>
                </div>
                <div className="wrapper">
                    <LandingImage size={{height: 650, width: 740}}/>
                </div>
            </Grid>
        </Container>
    )
}

export default styled(Landing)`
    .wrapper {
        height: 100%;
        width: 600px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .a {
            color: ${(props) => props.theme.secondaryColor}
        }
    }
`
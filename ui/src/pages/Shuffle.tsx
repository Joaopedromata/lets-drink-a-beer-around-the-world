import styled from 'styled-components'
import Container from '../components/Container'
import Grid from '../components/Grid'
import BeerMap from '../components/BeerMap'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import FlexGroupHorizontal from '../components/FlexGroupHorizontal'
import Title from '../components/Title'
import Table from '../components/Table'
import Cell from '../components/Cell'
import { useContext, useState } from 'react'
import { IItem, IOrganizeObj } from '../types'
import { BeerContext } from '../states/BeerState'

interface Props {
    className?: string
}

const Shuffle = ({ className }: Props) => {

    const [ item, setItem ] = useState<IItem>()
    const { fetchRandomItem, transformObjInArray } = useContext(BeerContext)

    const handleClick = async () => {
        const response: IItem = await fetchRandomItem()

        setItem(response)    
    }

    return (
        <Container>
            <Grid>
                <Wrapper width="700px">
                    <div className={className}>
                            <Title text="Can I try to recommend a beer for you?" fontSize="40px"/>
                            <Button text="YOU CAN!" styles="SECONDARY" onClick={handleClick}/>
                        {item && (
                            <Table height="400px">
                                {transformObjInArray(item!).map((r: IOrganizeObj, i: number) => (
                                    <Cell key={i}>
                                        <FlexGroupHorizontal width="90%">
                                            <p className="title">{r?.key}:</p><p className="content">{r?.value}</p>
                                        </FlexGroupHorizontal>
                                    </Cell>
                                ))}
                            </Table>
                        )}
                    </div>
                </Wrapper>
                <Wrapper width="700px">
                    {item && item?.coordinates && <BeerMap coordinates={item?.coordinates} markerText={`${item?.name}, ${item?.category && item?.category}`}/>}
                </Wrapper>
            </Grid>
        </Container>
    )
}

export default styled(Shuffle)`

    height: 700px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    .title {
        color: ${(props) => props.theme.fontColor};
        font-weight: 600;
    }

    .content {
        padding: 10px 0;
        max-width: 350px;
        height: 100%;
        color: ${(props) => props.theme.gray};
    }
        
    
`
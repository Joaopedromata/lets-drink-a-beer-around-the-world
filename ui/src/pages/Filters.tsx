import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AutoComplete from '../components/AutoComplete'
import Cell from '../components/Cell'
import Container from '../components/Container'
import FlexGroupHorizontal from '../components/FlexGroupHorizontal'
import FlexGroupVertical from '../components/FlexGroupVertical'
import Input from '../components/Input'
import Table from '../components/Table'
import { BeerContext } from '../states/BeerState'
import { IItem } from '../types'

interface Props {
    className?: string
}

const Filters = ({ className }: Props) => {

    const { filterState, transformObjInArray } = useContext(BeerContext)
    const [ inputValue, setInputValue ] = useState<string>()
    const [ filteredItems, setFilteredItems ] = useState<IItem[]>()
    const [ item, setItem ] = useState<IItem>()

    useEffect(() => {
        if(inputValue?.length! > 0) {

            const sortState = filterState(inputValue!).sort(
                function(a: IItem, b: IItem){
                    if(a?.name < b?.name) { return -1; }
                    if(a?.name > b?.name) { return 1; }
                    return 0;
                }
            )

            console.log(sortState)

            setFilteredItems(sortState)
        } else {
            setFilteredItems([])
        }
    }, [inputValue, filterState])

    useEffect(() => {
        if (item) {
            setFilteredItems([])
        }
    }, [item, filterState])

    const handleChange = (value: string) => {
        setInputValue(value)
    }

    return (
        <Container className={className}>
            <FlexGroupVertical height="80%">
                <div className="input-group">
                    <Input 
                        placeholder="What's state you going"
                        value={inputValue!}
                        onChange={handleChange}
                    />
                    {filteredItems?.length! > 0 && (
                        <AutoComplete>
                            {filteredItems?.map(item => (
                                <button onClick={() => setItem(item)}>{item?.name}</button>
                            ))}
                        </AutoComplete>
                    )}
                </div>
                <Table height="600px">
                    {item && transformObjInArray(item!).map((r: any) => (
                        <Cell>
                            <FlexGroupHorizontal width="90%">
                                <p className="title">{r?.key}:</p><p className="content">{r?.value}</p>
                            </FlexGroupHorizontal>
                        </Cell>
                    ))}
                </Table>
            </FlexGroupVertical>
        </Container>
    )
}

export default styled(Filters)`
    .input-group {

        height: 60px;

        button {
            min-height: 70px;
            border-bottom: 1px solid ${(props) => props.theme.gray};
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            transition: filter 300ms;

            &:last-child {
                border-bottom: none;
            }

            &:hover {
                filter: brightness(95%)
            }
        }
    }   

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
import {
  createContext,
  useEffect,
  useState
} from 'react'
import api from '../services/api'
import {
  IBeerState,
  IItem,
  IOrganizeObj
} from '../types'

type Props = {
  children: Function
}

const initialBeerState: IBeerState = {
  items: [],
  fetchRandomItem: () => {},
  filterState: () => undefined,
  transformObjInArray: () => undefined
}

export const BeerContext = createContext<IBeerState>(initialBeerState)

const BeerState = ({ children }: Props) => {

    const [ items, setItems ] = useState<IItem[]>([])

    useEffect(() => {
        api.get('/').then(res => {
            setItems(res.data)
        }).catch(e => console.error(e))
    }, [])

    const fetchRandomItem = () => {
      return api.get(`/random/`)
      .then(res => res.data[0])
      .catch(e => console.error(e))
    }

    const lowerCaseStringAndRemoveAccent = (value: string) => {
      return value?.normalize('NFD')?.replace(/[\u0300-\u036f]/g, '')?.toLowerCase()
    }

    const transformObjInArray = (arr: IItem): IOrganizeObj[] => {

      const transform = Object.entries(arr!).map(a => {
          return { key: a[0], value: a[1]}
      })

      return transform
    }

    const filterState = ( searchInput: string) => {
      return items?.filter(
        (item: IItem) => lowerCaseStringAndRemoveAccent(item?.state)?.includes(lowerCaseStringAndRemoveAccent(searchInput)))
    }

    const contextValue = {
        items,
        fetchRandomItem,
        filterState,
        transformObjInArray
    }

    return (
        <BeerContext.Provider value={contextValue}>
          {children(contextValue)}
        </BeerContext.Provider>
    )
}

export default BeerState

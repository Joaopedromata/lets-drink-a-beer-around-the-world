import { LatLngExpression } from "leaflet";

export interface IItem {
    abv: number
    address: string
    category: string
    coordinates: LatLngExpression
    country: string
    description: string
    ibu: string
    name: string
    state: string
    website: string
}

export interface IBeerState {
    items: IItem[]
    fetchRandomItem: () => any
    filterState: (searchInput: string) => any
    transformObjInArray: (arr: IItem) => any
}

export interface ITheme {
    primaryColor: string
    secondaryColor: string
    white: string
    fontColor: string
    gray: string
    lightGray: string
}

export interface IOrganizeObj {
    key: string
    value: string
}
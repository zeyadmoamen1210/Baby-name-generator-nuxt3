export enum Gender {
    GIRL = "Girl",
    BOY = "Boy",
    UNISEX = "Unisex",
}
  
export enum Popularity {
    UNIQUE = "Unique",
    TRENDY = "Trendy",
}

export enum Length {
    SHORT = "Short",
    LONG = "Long",
    ALL = "All",
}

export interface OptionsInterface {
    gender: Gender;
    popularity: Popularity;
    length: Length;
}

export interface NamesInterface {
    id: number,
    name: string,
    gender: Gender,
    length: Length,
    popularity: Popularity
}


export enum OptionCategories {
    GENDER = 'gender',
    POPULARITY = 'popularity',
    LENGTH = 'length'
}


export const names: NamesInterface[] = [
    {
        id: 1,
        name: "zeyadmoamen",
        gender: Gender.BOY,
        length: Length.LONG,
        popularity: Popularity.UNIQUE
    },
    {
        id: 2,
        name: "mohamed",
        gender: Gender.BOY,
        length: Length.LONG,
        popularity: Popularity.TRENDY
    },
    {
        id: 3,
        name: "peter",
        gender: Gender.BOY,
        length: Length.LONG,
        popularity: Popularity.TRENDY
    },
    {
        id: 4,
        name: "noha",
        gender: Gender.GIRL,
        length: Length.SHORT,
        popularity: Popularity.UNIQUE
    },
    {
        id: 5,
        name: "moaz",
        gender: Gender.BOY,
        length: Length.SHORT,
        popularity: Popularity.TRENDY
    },
    {
        id: 6,
        name: "adam",
        gender: Gender.BOY,
        length: Length.SHORT,
        popularity: Popularity.TRENDY
    },
    {
        id: 7,
        name: "islam",
        gender: Gender.UNISEX,
        length: Length.SHORT,
        popularity: Popularity.UNIQUE
    }
]
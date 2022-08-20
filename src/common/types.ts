export interface Character {
    id: number,
    name: string,
    gender: string,
    age: string,
    education: string,
    maritalStatus: string,
    career: string,
    profile: string,
    attributes: Attributes
}

export interface Attributes {
    moral: number,
    violence: number,
    strength: number,
    mood: number,
    money: number,
    courage: number,
    life: number,
    appearance: number
}

export interface Plot {
    id: number,
    text: string | null,
    time: string | null,
    location: string | null,
    options: [Option] | null,
    ending: GameEnding | null;
}

export interface Option {
    id: number,
    label: string | null,
    text: string | null,
    to: number,
    attributesChange: Attributes
}

export interface GameEnding {
    id: number,
    label: string,
    text: string
}
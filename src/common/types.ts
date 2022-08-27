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
    moral: number | null,
    violence: number | null,
    strength: number | null,
    mood: number | null,
    money: number | null,
    courage: number | null,
    life: number | null,
    appearance: number | null,
    random: number | null,
    selected: [] | null
}

export interface Plot {
    id: number,
    text: string | null,
    time: string | null,
    location: string | null,
    options: [Option] | null,
    showConditions: [Condition] | null;
}

export interface Option {
    id: number,
    label: string | null,
    text: string | null,
    to: number,
    attributesChange: Attributes
}

export interface Condition {
    operation: string,
    attributeName: string,
    attributeValue: number
}
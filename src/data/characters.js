import { Character1, Character2, Character3, Character4, Character5 } from '../assets/';

export const characters = [
    {
        id: 1,
        name: '陈大志',
        gender: '男',
        age: '45岁',
        education: '小学',
        maritalStatus: '离异',
        career: '无业',
        profile: Character1,
        attributes: {
            moral: 6,
            violence: 4,
            strength: 7,
            mood: 7,
            money: 10,
            courage: 6,
            life: 10,
            appearance: 6
        }
    },
    {
        id: 2,
        name: '李乐乐',
        gender: '女',
        age: '20岁',
        education: '本科',
        maritalStatus: '未婚',
        career: '在校学生',
        profile: Character2,
        attributes: {
            moral: 6,
            violence: 3,
            strength: 5,
            mood: 7,
            money: 10,
            courage: 6,
            life: 10,
            appearance: 7
        }
    },
    {
        id: 3,
        name: '刘阿强',
        gender: '男',
        age: '33岁',
        education: '初中',
        maritalStatus: '不明',
        career: '无业',
        profile: Character3,
        attributes: {
            moral: 6,
            violence: 4,
            strength: 7,
            mood: 7,
            money: 10,
            courage: 6,
            life: 10,
            appearance: 6,
            random: Math.random() * 100,
            selected: new Map()
        }
    },
    {
        id: 4,
        name: '王美美',
        gender: '女',
        age: '22岁',
        education: '本科',
        maritalStatus: '不明',
        career: '民企员工',
        profile: Character4,
        attributes: {
            moral: 6,
            violence: 3,
            strength: 5,
            mood: 7,
            money: 10,
            courage: 6,
            life: 10,
            appearance: 7
        }
    },
    { 
        id: 5,
        name: '张三',
        gender: '男',
        age: '48岁',
        education: '中专',
        maritalStatus: '已婚',
        career: '餐馆老板',
        profile: Character5,
        attributes: {
            moral: 6,
            violence: 4,
            strength: 7,
            mood: 7,
            money: 10,
            courage: 6,
            life: 10,
            appearance: 6
        }
    },
];
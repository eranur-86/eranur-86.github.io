import {SkillEntryItem} from '../interfaces/menuEntry'
import {SkillMenuEntry} from './skillMenuEntry'

const SkillPage = () => {

    const schwerpunkteItems:SkillEntryItem[] = [
        {entryItemName : "Java EE", experience: 4},
        {entryItemName : "Spring Boot", experience: 4},
        {entryItemName : "Jakarta Server Faces", experience: 4},
        {entryItemName : "React", experience: 3},
    ]
    const methodenItems:SkillEntryItem[] = [
        {entryItemName : "Objektorientierte Programmierung", experience: 3},
        {entryItemName : "Agile Prozesse", experience: 3},
        {entryItemName : "Test Driven Development", experience: 3},
        {entryItemName : "Scrum", experience: 3},
    ]

    return (
        <>
        <SkillMenuEntry menuName="Schwerpunkte" entryItem={schwerpunkteItems}/>
        <SkillMenuEntry menuName="Methoden" entryItem={methodenItems}/>
        </>
    )
}

export default SkillPage;
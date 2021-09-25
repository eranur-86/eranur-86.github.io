import { SkillEntryItem } from "../interfaces/menuEntry"

export const SkillMenuEntry = (props:{menuName:string,entryItem:SkillEntryItem[]}) => {

    return(
        <>
        <div>
            <h2>{props.menuName}</h2>
        </div>
        <div>
            <CreateSkillEntryItem entries={props.entryItem}/>
        </div>
        </>)

}

const CreateSkillEntryItem = (props:{entries:SkillEntryItem[]}) => {
    
    return(
    <>
        {props.entries.map(item => 
        <div>{item.entryItemName}, {item.experience}</div>
        )}
    </>)

 }
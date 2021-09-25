import { ProjektEntryItem } from "../interfaces/menuEntry"

export const ProjektMenuEntry = (props:{menuName:string,entryItem:ProjektEntryItem[]}) => {

    return(
        <>
        <div>
            <h2>{props.menuName}</h2>
        </div>
        <div>
            <CreateProjektEntryItem entries={props.entryItem}/>
        </div>
        </>)

}

const CreateProjektEntryItem = (props:{entries:ProjektEntryItem[]}) => {
    
    return(
    <>
        {props.entries.map(item => 
        <div>{item.entryItemName}, {item.entryItemDatum}, {item.entryItemText}</div>
        )}
    </>)

 }
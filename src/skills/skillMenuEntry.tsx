import { ProgressBar } from "react-bootstrap"
import { SkillEntryItem } from "../interfaces/menuEntry"

export const SkillMenuEntry = (props:{menuName:string,entryItem:SkillEntryItem[]}) => {

    return(
        <>
        <div>
            <h2 className="text-center">{props.menuName}</h2>
        </div>
        <div className="container-fluid">
            <CreateSkillEntryItem entries={props.entryItem}/>
        </div>
        </>)

}

const CreateSkillEntryItem = (props:{entries:SkillEntryItem[]}) => {
    
    return(
    <div className="col">
        {props.entries.map(item => 
        <div className="row">o {item.entryItemName}
        <ProgressBar variant={"info"} now={item.experience} max={5}/>
        </div>

        )}
    </div>)

 }
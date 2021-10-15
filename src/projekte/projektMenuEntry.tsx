import { Accordion } from "react-bootstrap"
import AccordionItem from "react-bootstrap/esm/AccordionItem"
import { Item } from "react-bootstrap/lib/Breadcrumb"
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
        <div>
            <Accordion>
                <AccordionItem eventKey={item.entryItemName}>
                    <Accordion.Header>{item.entryItemDatum} - {item.entryItemName}</Accordion.Header>
                    <Accordion.Body>{item.entryItemText}</Accordion.Body>
                </AccordionItem>
            </Accordion>
        </div>
        )}
    </>)

 }
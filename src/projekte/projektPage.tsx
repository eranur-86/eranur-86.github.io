import {ProjektEntryItem} from '../interfaces/menuEntry'
import {ProjektMenuEntry} from './projektMenuEntry'

const placeHolderItems:ProjektEntryItem[] = [
    {entryItemName : "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText"},
    {entryItemName : "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText"},
    {entryItemName : "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText"},
    {entryItemName : "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText"},
    {entryItemName : "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText"},
]

const ProjektPage = () => {
    return (
        <>
       <ProjektMenuEntry menuName="Aktuell" entryItem={placeHolderItems}/>
       <ProjektMenuEntry menuName="Technologien" entryItem={placeHolderItems}/>
       <ProjektMenuEntry menuName="Backend" entryItem={placeHolderItems}/>
       <ProjektMenuEntry menuName="Middleware" entryItem={placeHolderItems}/>
       <ProjektMenuEntry menuName="Schwerpunkte" entryItem={placeHolderItems}/>
       <ProjektMenuEntry menuName="Schwerpunkte" entryItem={placeHolderItems}/>
        <div>
            
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
        <div>
            Build-Umgebungen
        </div>
        <div>
            Datenbanken
        </div>
        <div>
            
        </div>
        </>
    )
}

export default ProjektPage;
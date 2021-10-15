import { ProjektEntryItem } from '../interfaces/menuEntry'
import { ProjektMenuEntry } from './projektMenuEntry'
import * as projectData from './projektData'

const placeHolderItems: Array<ProjektEntryItem> = [
    { entryItemName: "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText", entryItemTechnology: "React" },
    { entryItemName: "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText", entryItemTechnology: "React" },
    { entryItemName: "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText", entryItemTechnology: "React" },
    { entryItemName: "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText", entryItemTechnology: "React" },
    { entryItemName: "Placeholder", entryItemDatum: "2021-09", entryItemText: "PlaceholderText", entryItemTechnology: "React" },
]

const ProjektPage = () => {
    return (
        <>
            <ProjektMenuEntry menuName="Aktuell" entryItem={placeHolderItems} />
            <ProjektMenuEntry menuName="bisherige Projekte" entryItem={placeHolderItems} />
            <ProjektMenuEntry menuName="Backend" entryItem={placeHolderItems} />
            <ProjektMenuEntry menuName="Middleware" entryItem={placeHolderItems} />
            <ProjektMenuEntry menuName="Schwerpunkte" entryItem={placeHolderItems} />
            <ProjektMenuEntry menuName="Schwerpunkte" entryItem={placeHolderItems} />
        </>
    )
}

export default ProjektPage;
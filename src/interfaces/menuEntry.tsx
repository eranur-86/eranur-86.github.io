interface EntryItem {
    entryItemName:string,
}

export interface ProjektEntryItem extends EntryItem { 
    entryItemDatum:string,
    entryItemText:string,
    entryItemTechnology:string,
}

export interface SkillEntryItem extends EntryItem {
    experience:number
}
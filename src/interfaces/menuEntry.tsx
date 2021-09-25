interface EntryItem {
    entryItemName:String,
}

export interface ProjektEntryItem extends EntryItem { 
    entryItemDatum:String,
    entryItemText:String
}

export interface SkillEntryItem extends EntryItem {
    experience:number
}
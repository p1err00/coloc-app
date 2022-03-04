export interface Section_event_item {
    id :number,
    hash_event : string,
    nom : string,
    description : string,
    date_start : Date,
    date_end : Date,
    is_do : boolean,
    categorie : string,
    is_multiple_event : boolean,
    have_external_user : boolean
}
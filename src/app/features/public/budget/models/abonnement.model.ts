export interface Abonnement {
    id : number,
    id_user : number,
    link : string,
    amount : number,
    date_creation : Date,
    date_facturation : Date,
    site_name : string,
    is_payed : boolean
}
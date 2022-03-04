export interface Payment {
    id : number,
    id_user : number,
    amount : number,
    date_creation : Date,
    is_payed : boolean,
    date_payment : Date,
    link : string,
    nom : string,
    is_multiple_payment : boolean,
    multiple_code : string
}